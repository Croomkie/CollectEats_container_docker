using System;
using System.Collections.Generic;

namespace CollectEats.Models;

public partial class Optionsplat
{
    public int Id { get; set; }

    public string? Nomoption { get; set; }

    public int? Choixoptionid { get; set; }

    public virtual Choixoption? Choixoption { get; set; }
}
