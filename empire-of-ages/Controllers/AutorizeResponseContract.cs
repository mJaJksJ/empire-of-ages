using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace empire_of_ages.Controllers
{
    public class AutorizeResponseContract
    {
        [JsonProperty("is_authorize")]
        public bool isAuthorize { get; set; }

        [JsonProperty("login")]
        public string Nickname { get; set; }

        [JsonProperty("team")]
        public int Team { get; set; }

        [JsonProperty("color")]
        public string Color { get; set; }

        [JsonProperty("err_mes")]
        public string ErrMes { get; set; }
    }
}
