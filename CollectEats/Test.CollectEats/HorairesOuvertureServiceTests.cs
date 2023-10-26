using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services;
using FluentAssertions;
using Moq;

namespace Test.CollectEats
{
    [TestClass]
    public class HorairesOuvertureServiceTests
    {
        private Mock<IHorairesOuvertureRepository>? _mockRepository;
        private HorairesOuvertureService? _service;

        [TestInitialize]
        public void Setup()
        {
            _mockRepository = new Mock<IHorairesOuvertureRepository>();
            _service = new HorairesOuvertureService(_mockRepository.Object);
        }

        [TestMethod]
        public void GetAll_ShouldReturnAllItems()
        {
            // Arrange
            var horaires = new List<Horairesouverture>
            {
                new Horairesouverture { Id = 1 },
                new Horairesouverture { Id = 2 }
            };
            _mockRepository?.Setup(repo => repo.GetAll()).Returns(horaires);

            // Act
            var result = _service?.GetAll();

            // Assert
            result.Should().HaveCount(2);
            _mockRepository?.Verify(repo => repo.GetAll(), Times.Once);
        }

        [TestMethod]
        public void GetById_ShouldReturnCorrectItem()
        {
            // Arrange
            var horaire = new Horairesouverture { Id = 1 };
            _mockRepository?.Setup(repo => repo.GetById(1)).Returns(horaire);

            // Act
            var result = _service?.GetById(1);

            // Assert
            result.Should().BeEquivalentTo(horaire);
        }

        [TestMethod]
        public void Add_ShouldAddNewItem()
        {
            // Arrange
            var newItem = new Horairesouverture { Id = 3 };
            _mockRepository?.Setup(repo => repo.Add(newItem));

            // Act
            _service?.Add(newItem);

            // Assert
            _mockRepository?.Verify(repo => repo.Add(newItem), Times.Once);
        }

        [TestMethod]
        public void Update_ShouldUpdateItem()
        {
            // Arrange
            var itemToUpdate = new Horairesouverture { Id = 1 };
            _mockRepository?.Setup(repo => repo.Update(itemToUpdate));

            // Act
            _service?.Update(itemToUpdate);

            // Assert
            _mockRepository?.Verify(repo => repo.Update(itemToUpdate), Times.Once);
        }

        [TestMethod]
        public void Delete_ShouldRemoveItem()
        {
            // Arrange
            _mockRepository?.Setup(repo => repo.Delete(1));

            // Act
            _service?.Delete(1);

            // Assert
            _mockRepository?.Verify(repo => repo.Delete(1), Times.Once);
        }
    }
}
