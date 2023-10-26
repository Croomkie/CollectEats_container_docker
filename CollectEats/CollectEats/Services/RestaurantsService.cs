using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services.Interfaces;

namespace CollectEats.Services
{
    public class RestaurantsService : IRestaurantsService
    {
        private readonly IRestaurantsRepository _restaurantRepository;

        public RestaurantsService(IRestaurantsRepository restaurantRepository)
        {
            _restaurantRepository = restaurantRepository;
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return _restaurantRepository.GetAll();
        }

        public Restaurant? GetById(int id)
        {
            return _restaurantRepository.GetById(id);
        }

        public void Add(Restaurant restaurant)
        {
            _restaurantRepository.Add(restaurant);
        }

        public void Update(Restaurant restaurant)
        {
            _restaurantRepository.Update(restaurant);
        }

        public void Delete(int id)
        {
            _restaurantRepository.Delete(id);
        }
    }
}
