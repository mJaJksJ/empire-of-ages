﻿using System;
using System.Collections.Generic;

#nullable disable

namespace empire_of_ages.Models
{
    public partial class User
    {
        public string Name { get; set; }
        public string Surname { get; set; }
        public DateTime Birthday { get; set; }
        public string Nickname { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int Team { get; set; }
    }
}
