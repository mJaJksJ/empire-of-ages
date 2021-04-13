using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace empire_of_ages.Controllers
{
    public class HomeController : Controller
    {
        private EmpireOfAgesContext db;
        public HomeController(EmpireOfAgesContext context)
        {
            db = context;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IEnumerable<bool> GetResponseToLoginNewUser(string login)
        {
            return new List<bool>() { db.Users.Where(x => x.Nickname.Equals(login)).Count() == 0 };
        }

        [HttpPost]
        public async Task<IActionResult> LoginNewUser(User user)
        {
            if (db.Users.Where(x => x.Nickname.Equals(user.Nickname)).Count() == 0)
            {
                db.Users.Add(user);
                await db.SaveChangesAsync();
            }
            return RedirectToAction("Index");
        }


        [HttpGet]
        public IEnumerable<bool> GetResponseToSignInUser(string login, string password)
        {
            return new List<bool>() { db.Users.Where(x => ((x.Nickname.Equals(login) || x.Email.Equals(login)) && x.Password.Equals(password))).Count() != 0 };
        }

    }
}
