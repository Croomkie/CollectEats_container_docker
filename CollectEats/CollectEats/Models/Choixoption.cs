using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CollectEats.Models;

public partial class Choixoption
{
    public int Id { get; set; }

    public string? Nomchoix { get; set; }

    public decimal? Surcout { get; set; }

    public virtual ICollection<Optionsplat> Optionsplats { get; set; } = new List<Optionsplat>();

    [JsonIgnore]
    public virtual ICollection<Plat> Plats { get; set; } = new List<Plat>();
}
