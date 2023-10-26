using CollectEats.Models;

namespace CollectEats.Repositories.Interfaces
{
    public interface IPlatsRepository
    {
        IEnumerable<Plat> GetAll();
        IEnumerable<Plat> GetAllOfRestaurant(int restaurantId);
        Plat? GetById(int id);
        void Add(Plat plat);
        void Update(Plat plat);
        void Delete(int id);
        IEnumerable<Plat> GetByRestaurantId(int restaurantId);
    }
}
