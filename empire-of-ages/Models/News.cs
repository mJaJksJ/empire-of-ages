using System;
using System.Collections.Generic;

#nullable disable

namespace empire_of_ages.Models
{
    public partial class News
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public string Text { get; set; }
    }
}
