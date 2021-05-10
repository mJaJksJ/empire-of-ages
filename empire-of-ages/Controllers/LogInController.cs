using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace empire_of_ages.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LogInController : ControllerBase
    {
        private EmpireOfAgesContext db;
        public LogInController(EmpireOfAgesContext context)
        {
            db = context;
        }

        [HttpPost]
        [ProducesResponseType(typeof(AutorizeResponseContract), 200)]
        public async Task<IActionResult> LogInUser(User user)
        {
            bool isAuthorizeSucces = false;
            
            if (db.Users.Where(x => x.Nickname.Equals(user.Nickname)).Count() == 0)
            {
                await db.Users.AddAsync(user);
                await db.SaveChangesAsync();
                isAuthorizeSucces = true;
            }

            string errMes = isAuthorizeSucces ? "" : "Пользователь уже существует";

            int team = isAuthorizeSucces ? user.Team : 0;

            return Ok(new AutorizeResponseContract { 
                isAuthorize = isAuthorizeSucces,
                Nickname = user.Nickname, 
                Team = team,
                Color = Models.Color.color[team],
                ErrMes = errMes
            });
        }
    }
}
