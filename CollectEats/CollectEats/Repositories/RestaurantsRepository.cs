using CollectEats.Data;
using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Repositories
{
    public class RestaurantsRepository : IRestaurantsRepository
    {
        private readonly CollectEats3Context _context;

        public RestaurantsRepository(CollectEats3Context context)
        {
            _context = context;
        }

        public IEnumerable<Restaurant> GetAll()
        {
            return _context.Restaurants
                           .Include(r => r.Adresse)
                           .ToList();
        }

        public Restaurant? GetById(int id)
        {
            return _context.Restaurants.Include(r => r.Adresse).FirstOrDefault(r => r.Id == id);
        }

        public void Add(Restaurant restaurant)
        {
            _context.Restaurants.Add(restaurant);
            _context.SaveChanges();
        }

        public void Update(Restaurant restaurant)
        {
            _context.Restaurants.Update(restaurant);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var restaurant = _context.Restaurants.FirstOrDefault(r => r.Id == id);
            if (restaurant != null)
            {
                _context.Restaurants.Remove(restaurant);
                _context.SaveChanges();
            }
        }
    }
}
