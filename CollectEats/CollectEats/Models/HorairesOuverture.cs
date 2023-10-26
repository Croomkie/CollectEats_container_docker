using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CollectEats.Models;

public partial class Horairesouverture
{
    public int Id { get; set; }

    public string? Jour { get; set; }

    public TimeOnly? Heureouverturematin { get; set; }

    public TimeOnly? Heurefermeturematin { get; set; }

    public TimeOnly? Heureouverturesoir { get; set; }

    public TimeOnly? Heurefermeturesoir { get; set; }

    public int? Restaurantid { get; set; }

    [JsonIgnore]
    public virtual Restaurant? Restaurant { get; set; }
}
