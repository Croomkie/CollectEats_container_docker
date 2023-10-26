using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services;
using FluentAssertions;
using Moq;

namespace Test.CollectEats
{
    [TestClass]
    public class ChoixOptionsServiceTests
    {
        private Mock<IChoixOptionsRepository>? _mockRepository;
        private ChoixOptionsService? _service;
        private List<Choixoption>? _list;

        [TestInitialize]
        public void Setup()
        {
            _mockRepository = new Mock<IChoixOptionsRepository>();

            _list = new List<Choixoption>
            {
                new Choixoption { Id = 1, Nomchoix = "Option1", Surcout = 1.0m },
                new Choixoption { Id = 2, Nomchoix = "Option2", Surcout = 2.0m }
            };

            _service = new ChoixOptionsService(_mockRepository.Object);
        }

        [TestMethod]
        public void GetAll_ReturnsAllItems()
        {
            // Arrange
            if (_list != null)
                _mockRepository?.Setup(repo => repo.GetAll()).Returns(_list);

            // Act
            var result = _service?.GetAll();

            // Assert
            result?.Count().Should().Be(_list?.Count);
            _mockRepository?.Verify(repo => repo.GetAll(), Times.Once);
        }

        [TestMethod]
        public void GetById_ValidId_ReturnsCorrectItem()
        {
            // Arrange
            var id = 1;
            _mockRepository?.Setup(repo => repo.GetById(id)).Returns(_list?.First(x => x.Id == id));

            // Act
            var result = _service?.GetById(id);

            // Assert
            result?.Id.Should().Be(1);
            _mockRepository?.Verify(repo => repo.GetById(id), Times.Once);
        }

        [TestMethod]
        public void Add_ValidItem_IsAdded()
        {
            // Arrange
            var newItem = new Choixoption { Id = 3, Nomchoix = "Option3", Surcout = 3.0m };
            _mockRepository?.Setup(repo => repo.Add(newItem));

            // Act
            _service?.Add(newItem);

            // Assert
            _mockRepository?.Verify(repo => repo.Add(newItem), Times.Once);
        }

        [TestMethod]
        public void Update_ValidItem_IsUpdated()
        {
            // Arrange
            var updatedItem = new Choixoption { Id = 1, Nomchoix = "UpdatedOption", Surcout = 1.5m };
            _mockRepository?.Setup(repo => repo.Update(updatedItem));

            // Act
            _service?.Update(updatedItem);

            // Assert
            _mockRepository?.Verify(repo => repo.Update(updatedItem), Times.Once);
        }

        [TestMethod]
        public void Delete_ValidId_IsDeleted()
        {
            // Arrange
            var idToDelete = 1;

            // Act
            _service?.Delete(idToDelete);

            // Assert
            _mockRepository?.Verify(repo => repo.Delete(idToDelete), Times.Once);
        }
    }
}
