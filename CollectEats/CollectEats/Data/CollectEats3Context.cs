using CollectEats.Models;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Data;

public partial class CollectEats3Context : DbContext
{
    public CollectEats3Context()
    {
    }

    public CollectEats3Context(DbContextOptions<CollectEats3Context> options)
        : base(options)
    {
    }

    public virtual DbSet<Adress> Adresses { get; set; }

    public virtual DbSet<Choixoption> Choixoptions { get; set; }

    public virtual DbSet<Horairesouverture> Horairesouvertures { get; set; }

    public virtual DbSet<Optionsplat> Optionsplats { get; set; }

    public virtual DbSet<Plat> Plats { get; set; }

    public virtual DbSet<Restaurant> Restaurants { get; set; }

    public virtual DbSet<Utilisateur> Utilisateurs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Adress>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("adresses_pkey");

            entity.ToTable("adresses");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Codepostal)
                .HasMaxLength(50)
                .HasColumnName("codepostal");
            entity.Property(e => e.Ligne1)
                .HasMaxLength(50)
                .HasColumnName("ligne1");
            entity.Property(e => e.Ligne2)
                .HasMaxLength(50)
                .HasColumnName("ligne2");
            entity.Property(e => e.Ligne3)
                .HasMaxLength(50)
                .HasColumnName("ligne3");
            entity.Property(e => e.Pays)
                .HasMaxLength(50)
                .HasColumnName("pays");
            entity.Property(e => e.Region)
                .HasMaxLength(50)
                .HasColumnName("region");
            entity.Property(e => e.Ville)
                .HasMaxLength(50)
                .HasColumnName("ville");
        });

        modelBuilder.Entity<Choixoption>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("choixoptions_pkey");

            entity.ToTable("choixoptions");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Nomchoix)
                .HasMaxLength(50)
                .HasColumnName("nomchoix");
            entity.Property(e => e.Surcout)
                .HasPrecision(10, 2)
                .HasColumnName("surcout");
        });

        modelBuilder.Entity<Horairesouverture>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("horairesouverture_pkey");

            entity.ToTable("horairesouverture");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Heurefermeturematin).HasColumnName("heurefermeturematin");
            entity.Property(e => e.Heurefermeturesoir).HasColumnName("heurefermeturesoir");
            entity.Property(e => e.Heureouverturematin).HasColumnName("heureouverturematin");
            entity.Property(e => e.Heureouverturesoir).HasColumnName("heureouverturesoir");
            entity.Property(e => e.Jour)
                .HasMaxLength(50)
                .HasColumnName("jour");
            entity.Property(e => e.Restaurantid).HasColumnName("restaurantid");

            entity.HasOne(d => d.Restaurant).WithMany(p => p.Horairesouvertures)
                .HasForeignKey(d => d.Restaurantid)
                .HasConstraintName("horairesouverture_restaurantid_fkey");
        });

        modelBuilder.Entity<Optionsplat>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("optionsplat_pkey");

            entity.ToTable("optionsplat");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Choixoptionid).HasColumnName("choixoptionid");
            entity.Property(e => e.Nomoption)
                .HasMaxLength(50)
                .HasColumnName("nomoption");

            entity.HasOne(d => d.Choixoption).WithMany(p => p.Optionsplats)
                .HasForeignKey(d => d.Choixoptionid)
                .HasConstraintName("optionsplat_choixoptionid_fkey");
        });

        modelBuilder.Entity<Plat>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("plats_pkey");

            entity.ToTable("plats");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Choixoptionid).HasColumnName("choixoptionid");
            entity.Property(e => e.Description)
                .HasMaxLength(50)
                .HasColumnName("description");
            entity.Property(e => e.Nomplat)
                .HasMaxLength(50)
                .HasColumnName("nomplat");
            entity.Property(e => e.Prixbase)
                .HasPrecision(10, 2)
                .HasColumnName("prixbase");
            entity.Property(e => e.Restaurantid).HasColumnName("restaurantid");

            entity.HasOne(d => d.Choixoption).WithMany(p => p.Plats)
                .HasForeignKey(d => d.Choixoptionid)
                .HasConstraintName("plats_choixoptionid_fkey");

            entity.HasOne(d => d.Restaurant).WithMany(p => p.Plats)
                .HasForeignKey(d => d.Restaurantid)
                .HasConstraintName("plats_restaurantid_fkey");
        });

        modelBuilder.Entity<Restaurant>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("restaurants_pkey");

            entity.ToTable("restaurants");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Adresseid).HasColumnName("adresseid");
            entity.Property(e => e.Nom)
                .HasMaxLength(50)
                .HasColumnName("nom");
            entity.Property(e => e.Telephone)
                .HasMaxLength(50)
                .HasColumnName("telephone");
            entity.Property(e => e.Utilisateurid).HasColumnName("utilisateurid");

            entity.HasOne(d => d.Adresse).WithMany(p => p.Restaurants)
                .HasForeignKey(d => d.Adresseid)
                .HasConstraintName("restaurants_adresseid_fkey");

            entity.HasOne(d => d.Utilisateur).WithMany(p => p.Restaurants)
                .HasForeignKey(d => d.Utilisateurid)
                .HasConstraintName("restaurants_utilisateurid_fkey");
        });

        modelBuilder.Entity<Utilisateur>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("utilisateurs_pkey");

            entity.ToTable("utilisateurs");

            entity.Property(e => e.Id).HasColumnName("id");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
