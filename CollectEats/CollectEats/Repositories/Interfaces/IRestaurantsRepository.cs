using CollectEats.Models;

namespace CollectEats.Repositories.Interfaces
{
    public interface IRestaurantsRepository
    {
        IEnumerable<Restaurant> GetAll();
        Restaurant? GetById(int id);
        void Add(Restaurant restaurant);
        void Update(Restaurant restaurant);
        void Delete(int id);
    }
}
