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
           /* db.Users.Add(new User()
            {
                Name = "WE",
                Surname = "Er",
                Birthday = DateTime.Today,
                Nickname = "Werto",
                Email = "aa@aga.ogo",
                Password = "Ww222222"
            });
            db.SaveChanges();*/
            return View();
        }

        /*public IActionResult Add()
        {
            return View();
        }*/

        [HttpGet]
        public IEnumerable<bool> GetResponseToLoginNewUser(string login)
        {
            return new List<bool>() { login.Length > 5 };
        }

        [HttpPost]
        public IActionResult LoginNewUser(User user)
        {
            using (StreamWriter sw = new StreamWriter(@"C:/Users/maksi/Desktop/UsersData.txt", true, System.Text.Encoding.Default))
            {
                sw.WriteLine(user.Name);
                sw.WriteLine(user.Surname);
                sw.WriteLine(user.Birthday);
                sw.WriteLine(user.Nickname);
                sw.WriteLine(user.Email);
                sw.WriteLine(user.Password);
            }
            //db.Users.Add(user);
            //db.SaveChanges();
            //return RedirectToAction("Index");
            return Ok();
        }

        /*[HttpPost]
        public async Task<IActionResult> Add(User user)
        {
            db.Users.Add(user);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }*/

    }
}
