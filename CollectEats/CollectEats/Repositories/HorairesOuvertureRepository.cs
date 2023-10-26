using CollectEats.Data;
using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Repositories
{
    public class HorairesOuvertureRepository : IHorairesOuvertureRepository
    {
        private readonly CollectEats3Context _context;

        public HorairesOuvertureRepository(CollectEats3Context context)
        {
            _context = context;
        }

        public IEnumerable<Horairesouverture> GetAll()
        {
            return _context.Horairesouvertures.ToList();
        }

        public Horairesouverture? GetById(int id)
        {
            return _context.Horairesouvertures.FirstOrDefault(h => h.Id == id);
        }

        public IEnumerable<Horairesouverture> GetByRestaurantId(int restaurantId)
        {
            return _context.Horairesouvertures.Where(h => h.Restaurantid == restaurantId).ToList();
        }

        public void Add(Horairesouverture horaire)
        {
            _context.Horairesouvertures.Add(horaire);
            _context.SaveChanges();
        }

        public void Update(Horairesouverture horaire)
        {
            _context.Entry(horaire).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var horaire = _context.Horairesouvertures.FirstOrDefault(h => h.Id == id);
            if (horaire != null)
            {
                _context.Horairesouvertures.Remove(horaire);
                _context.SaveChanges();
            }
        }
    }
}
