using System;
using System.Collections.Generic;

#nullable disable

namespace empire_of_ages.Models
{
    public partial class Warrior
    {
        public string Name { get; set; }
        public string Picture { get; set; }
        public string Nation { get; set; }
        public int Speed { get; set; }
        public int Hitpoints { get; set; }
        public int Attach { get; set; }
        public int AttachDistance { get; set; }
    }
}
