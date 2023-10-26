using CollectEats.Models;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        //DbSet
        public DbSet<Utilisateur> Utilisateurs { get; set; }
        public DbSet<Adress> Adresses { get; set; }
        public DbSet<Choixoption> ChoixOptions { get; set; }
        public DbSet<Optionsplat> OptionsPlat { get; set; }
        public DbSet<Restaurant> Restaurants { get; set;}
        public DbSet<Plat> Plats { get; set; }
        public DbSet<Horairesouverture> HorairesOuverture { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var entity in modelBuilder.Model.GetEntityTypes())
            {
                var tableName = entity.GetTableName();
                if (!string.IsNullOrEmpty(tableName))
                {
                    entity.SetTableName(tableName.ToLower());
                }

                foreach (var property in entity.GetProperties())
                {
                    var columnName = property.GetColumnName();
                    if (!string.IsNullOrEmpty(columnName))
                    {
                        property.SetColumnName(columnName.ToLower());
                    }
                }
            }
        }

    }
}
