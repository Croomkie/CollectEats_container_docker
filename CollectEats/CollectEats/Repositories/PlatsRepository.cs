using CollectEats.Data;
using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Repositories
{
    public class PlatsRepository : IPlatsRepository
    {
        private readonly CollectEats3Context _context;

        public PlatsRepository(CollectEats3Context context)
        {
            _context = context;
        }

        public IEnumerable<Plat> GetAll()
        {
            return _context.Plats.Include(p => p.Choixoption).ToList();
        }

        public Plat? GetById(int id)
        {
            return _context.Plats.Include(p => p.Choixoption).FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Plat> GetAllOfRestaurant(int restaurantId)
        {
            return _context.Plats.Where(p=>p.Restaurantid == restaurantId).Include(p => p.Choixoption).ToList();
        }

        public void Add(Plat plat)
        {
            _context.Plats.Add(plat);
            _context.SaveChanges();
        }

        public void Update(Plat plat)
        {
            _context.Entry(plat).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var plat = _context.Plats.FirstOrDefault(p => p.Id == id);
            if (plat != null)
            {
                _context.Plats.Remove(plat);
                _context.SaveChanges();
            }
        }

        public IEnumerable<Plat> GetByRestaurantId(int restaurantId)
        {
            return _context.Plats.Include(p => p.Choixoption).Where(p => p.Restaurantid == restaurantId).ToList();
        }
    }
}
