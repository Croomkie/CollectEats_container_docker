using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace CollectEats.Models;

public partial class Restaurant
{
    public int Id { get; set; }

    public string? Nom { get; set; }

    public string? Telephone { get; set; }

    public int? Utilisateurid { get; set; }

    public int? Adresseid { get; set; }

    public virtual Adress? Adresse { get; set; }

    public virtual ICollection<Horairesouverture> Horairesouvertures { get; set; } = new List<Horairesouverture>();

    [JsonIgnore]
    public virtual ICollection<Plat> Plats { get; set; } = new List<Plat>();

    public virtual Utilisateur? Utilisateur { get; set; }
}
