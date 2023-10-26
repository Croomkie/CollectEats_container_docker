using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services.Interfaces;

namespace CollectEats.Services
{
    public class PlatsService : IPlatsService
    {
        private readonly IPlatsRepository _platRepository;

        public PlatsService(IPlatsRepository platRepository)
        {
            _platRepository = platRepository;
        }

        public IEnumerable<Plat> GetAll()
        {
            return _platRepository.GetAll();
        }

        public IEnumerable<Plat> GetAllOfRestaurant(int restaurantId)
        {
            return _platRepository.GetAllOfRestaurant(restaurantId);
        }

        public Plat? GetById(int id)
        {
            return _platRepository.GetById(id);
        }

        public void Add(Plat plat)
        {
            _platRepository.Add(plat);
        }

        public void Update(Plat plat)
        {
            _platRepository.Update(plat);
        }

        public void Delete(int id)
        {
            _platRepository.Delete(id);
        }
    }
}
