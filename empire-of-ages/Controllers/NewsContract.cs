using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace empire_of_ages.Controllers
{
    public class NewsContract
    {
        public string Title { get; set; }
        public string Date { get; set; }
        public string[] Text { get; set; }
    }
}
