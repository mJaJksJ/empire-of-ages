using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace empire_of_ages.Controllers
{
    public class UserTeamContract
    {
        [JsonProperty("team_num")]
        public int Team { get; set; }

        [JsonProperty("team_color")]
        public string Color { get; set; }

        [JsonProperty("err_mes")]
        public string ErrMes { get; set; }
    }
}