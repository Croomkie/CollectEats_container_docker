using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services;
using FluentAssertions;
using Moq;

namespace Test.CollectEats
{
    [TestClass]
    public class AdressesServiceTests
    {
        private Mock<IAdressesRepository>? _mockRepository;
        private AdressesService? _service;
        private List<Adress>? _adresses;

        [TestInitialize]
        public void SetUp()
        {
            _mockRepository = new Mock<IAdressesRepository>();

            _adresses = new List<Adress>
            {
                new Adress { Id = 1, Ligne1 = "Ligne1a" },
                new Adress { Id = 2, Ligne1 = "Ligne1b" }
            };

            _mockRepository.Setup(repo => repo.GetAll()).Returns(_adresses);

            _service = new AdressesService(_mockRepository.Object);
        }

        [TestMethod]
        public void GetAll_ShouldReturnAllAdresses()
        {
            // Act
            var results = _service?.GetAll();

            // Assert
            _adresses?.Count.Should().Be(results?.Count());
            results?.Should().NotBeNull();
            results?.ToList()[0].Id.Should().Be(_adresses?[0].Id);
            results?.ToList()[0].Ligne1.Should().Be(_adresses?[0].Ligne1);
            results?.ToList()[1].Id.Should().Be(_adresses?[1].Id);
            results?.ToList()[1].Ligne1.Should().Be(_adresses?[1].Ligne1);

            _mockRepository?.Verify(repo => repo.GetAll(), Times.Once);
        }

        [TestMethod]
        public void Add_Address_ValidInput_AddressAdded()
        {
            // Arrange
            var address = new Adress { Id = 1, Ligne1 = "123 Rue Principale" };

            // Act
            _service?.Add(address);

            // Assert
            _mockRepository?.Verify(repo => repo.Add(address), Times.Once);
        }

        [TestMethod]
        public void GetById_ValidId_ReturnsAddress()
        {
            // Arrange
            var address = new Adress { Id = 1, Ligne1 = "123 Rue Principale" };
            _mockRepository?.Setup(repo => repo.GetById(1)).Returns(address);

            // Act
            var result = _service?.GetById(1);

            // Assert
            address.Should().BeEquivalentTo(result);
            _mockRepository?.Verify(repo => repo.GetById(1), Times.Once);
        }

        [TestMethod]
        public void Update_ValidAddress_AddressUpdated()
        {
            // Arrange
            var address = new Adress { Id = 1, Ligne1 = "123 Rue Nouvelle" };

            // Act
            _service?.Update(address);

            // Assert
            _mockRepository?.Verify(repo => repo.Update(address), Times.Once);
        }

        [TestMethod]
        public void Delete_ValidId_AddressDeleted()
        {
            // Arrange
            int idToDelete = 1;

            // Act
            _service?.Delete(idToDelete);

            // Assert
            _mockRepository?.Verify(repo => repo.Delete(idToDelete), Times.Once);
        }
    }
}
