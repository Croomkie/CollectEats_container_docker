using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CollectEats.DTOs
{
    public class AddPlatRequest
    {
        public string? Nomplat { get; set; }
        public string? Description { get; set; }
        public decimal Prixbase { get; set; }

        // Id de choix d'option et de restaurant pour associer le plat à un choix d'option ou un restaurant.
        public int? Choixoptionid { get; set; }
        public int? Restaurantid { get; set; }
    }
}
