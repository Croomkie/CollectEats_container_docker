using CollectEats.Models;

namespace CollectEats.Services.Interfaces
{
    public interface IPlatsService
    {
        IEnumerable<Plat> GetAll();
        IEnumerable<Plat> GetAllOfRestaurant(int restaurantId);
        Plat? GetById(int id);
        void Add(Plat plat);
        void Update(Plat plat);
        void Delete(int id);
    }
}
