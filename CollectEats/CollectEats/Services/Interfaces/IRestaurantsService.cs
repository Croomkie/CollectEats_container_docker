using CollectEats.Models;

namespace CollectEats.Services.Interfaces
{
    public interface IRestaurantsService
    {
        IEnumerable<Restaurant> GetAll();
        Restaurant? GetById(int id);
        void Add(Restaurant restaurant);
        void Update(Restaurant restaurant);
        void Delete(int id);
    }
}
