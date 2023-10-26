using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CollectEats.Models;

public partial class Adress
{
    public int Id { get; set; }

    public string? Ligne1 { get; set; }

    public string? Codepostal { get; set; }

    public string? Region { get; set; }

    public string? Pays { get; set; }

    public string? Ligne2 { get; set; }

    public string? Ligne3 { get; set; }

    public string? Ville { get; set; }
    [JsonIgnore]
    public virtual ICollection<Restaurant> Restaurants { get; set; } = new List<Restaurant>();
}
