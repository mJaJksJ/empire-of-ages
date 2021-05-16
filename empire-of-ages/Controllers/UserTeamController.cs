using empire_of_ages.Models;
using Microsoft.AspNetCore.Authorization;
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
    public class UserTeamController : ControllerBase
    {
        private EmpireOfAgesContext db;
        public UserTeamController(EmpireOfAgesContext context)
        {
            db = context;
        }

        [HttpPut]
        [Authorize]
        [ProducesResponseType(typeof(UserTeamContract), 200)]
        public async Task<IActionResult> ChangeUserTeam(string login)
        {
            var users = db.Users.Where(x => x.Nickname.Equals(login));
            var user = users.FirstOrDefault();

            if (user != null)
            {
                
                user.Team = (user.Team + 1) % 8;
                db.Users.Update(user);
                await db.SaveChangesAsync();
            }
            if (user != null)
            {
                return Ok(new UserTeamContract { Team = user.Team, Color = Models.Color.color[user.Team], ErrMes = "" });
            }
            else
            {
                return Ok(new UserTeamContract { Team = -1, Color = "#FFFFFF", ErrMes = "" });
            }

        }

        [HttpGet]
        [ProducesResponseType(typeof(UserTeamContract), 200)]
        public async Task<IActionResult> UserTeam(string login)
        {
            var users = db.Users.Where(x => x.Nickname.Equals(login));

            if (users.Count() != 0)
            {
                var user = users.First();
                return Ok(new UserTeamContract{Team = user.Team, Color = Models.Color.color[user.Team], ErrMes = "" });
            }

            return Ok(new UserTeamContract{Team = -1, Color = "#FFFFFF", ErrMes = "" });
        }
    }
}
