using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace empire_of_ages.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignInController : ControllerBase
    {
        private EmpireOfAgesContext db;

        public SignInController(EmpireOfAgesContext context)
        {
            db = context;
        }

        [HttpGet]
        [ProducesResponseType(typeof(AutorizeResponseContract), 200)]
        public async Task<IActionResult> SignInUser(string login, string password)
        {
            var users = db.Users.Where(x => ((x.Nickname.Equals(login) || x.Email.Equals(login)) && x.Password.Equals(password)));
            bool isAuthorizeSucces = users.Count() != 0;
            int team = isAuthorizeSucces ? users.First().Team : 0;
            string errMes = isAuthorizeSucces ? "" : "Неправильный логин или пароль";
            if (isAuthorizeSucces)
            {
                await Authenticate(login);
            }
            return Ok(new AutorizeResponseContract { 
                isAuthorize = isAuthorizeSucces, 
                Nickname = login, 
                Team = team,
                Color = Models.Color.color[team],
                ErrMes = errMes
            });
        }

        private async Task Authenticate(string userName)
        {
            // создаем один claim
            var claims = new List<Claim>
            {
                new Claim(ClaimsIdentity.DefaultNameClaimType, userName)
            };
            // создаем объект ClaimsIdentity
            ClaimsIdentity id = new ClaimsIdentity(claims, "ApplicationCookie", ClaimsIdentity.DefaultNameClaimType, ClaimsIdentity.DefaultRoleClaimType);
            // установка аутентификационных куки
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(id));
        }
    }
}
