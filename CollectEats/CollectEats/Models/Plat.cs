using System;
using System.Collections.Generic;

namespace CollectEats.Models;

public partial class Plat
{
    public int Id { get; set; }

    public string? Nomplat { get; set; }

    public string? Description { get; set; }

    public decimal? Prixbase { get; set; }

    public int? Choixoptionid { get; set; }

    public int? Restaurantid { get; set; }

    public virtual Choixoption? Choixoption { get; set; }

    public virtual Restaurant? Restaurant { get; set; }
}
