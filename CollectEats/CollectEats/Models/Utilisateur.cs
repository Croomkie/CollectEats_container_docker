using System;
using System.Collections.Generic;

namespace CollectEats.Models;

public partial class Utilisateur
{
    public int Id { get; set; }

    public virtual ICollection<Restaurant> Restaurants { get; set; } = new List<Restaurant>();
}
