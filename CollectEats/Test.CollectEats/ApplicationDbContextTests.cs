using CollectEats.Data;
using CollectEats.Models;
using FluentAssertions;
using Microsoft.EntityFrameworkCore;

namespace Test.CollectEats
{
    [TestClass]
    public class ApplicationDbContextTests
    {
        private ApplicationDbContext? _context;

        [TestInitialize]
        public void TestInitialize()
        {
            // Configurer la cha�ne de connexion � la base de donn�es de test PostgreSQL
            var options = new DbContextOptionsBuilder<ApplicationDbContext>()
                .UseNpgsql("Host=localhost;Username=postgres;Password=admin;Database=CollectEats")
                .Options;

            _context = new ApplicationDbContext(options);

            // Ajouter des donn�es de test
            _context.Adresses.Add(new Adress { Ligne1 = "Test2", Codepostal = "69490" });
            _context.SaveChanges();
        }

        [TestMethod]
        [Ignore]
        public void CanRetrieveAdresseFromDatabase()
        {
            if (_context == null)
                throw new ArgumentNullException(nameof(_context));

            var adresse = _context.Adresses.FirstOrDefault(a => a.Ligne1 == "Test2");
            var adresses = _context.Adresses.ToList();
            adresse.Should().NotBeNull();
        }
    }
}