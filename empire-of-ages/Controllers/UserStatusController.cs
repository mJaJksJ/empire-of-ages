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
    public class UserStatusController : ControllerBase
    {
        private EmpireOfAgesContext db;

        public UserStatusController(EmpireOfAgesContext context)
        {
            db = context;
        }


        [HttpGet]
        [ProducesResponseType(typeof(AutorizeResponseContract), 200)]
        public async Task<IActionResult> LogOut()
        {
            if (User.Identity.IsAuthenticated)
            {
                var user = db.Users.Where(x => (x.Nickname.Equals(User.Identity.Name) || x.Email.Equals(User.Identity.Name))).First();
                bool isAuthorizeSucces = true;
                int team = user.Team;
                string errMes = "";
                return Ok(new AutorizeResponseContract
                {
                    isAuthorize = isAuthorizeSucces,
                    Nickname = User.Identity.Name,
                    Team = team,
                    Color = Models.Color.color[team],
                    ErrMes = errMes
                });
            }
            return Ok(new AutorizeResponseContract
            {
                isAuthorize = false,
                Nickname = "",
                Team = 0,
                Color = Models.Color.color[0],
                ErrMes = "Не авторизован"
            });
        }
    }
}
