using empire_of_ages.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace empire_of_ages.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private EmpireOfAgesContext db;

        public NewsController(EmpireOfAgesContext context)
        {
            db = context;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<NewsContract>), 200)]
        public async Task<IActionResult> GetNews()
        {
            var dbNews = db.News.AsNoTracking();
            List<NewsContract> news = new List<NewsContract>();
            foreach(var dbNew in dbNews)
            {
                news.Add(new NewsContract
                {
                    Date = dbNew.Date.ToString(),
                    Title = dbNew.Title,
                    Text = dbNew.Text.Split(new char[] { '&' })
                });
            };
                
            return Ok(news);
        }
    }
}
