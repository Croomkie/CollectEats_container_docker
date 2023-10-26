using CollectEats.Data;
using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Repositories
{
    public class ChoixOptionsRepository : IChoixOptionsRepository
    {
        private readonly CollectEats3Context _context;

        public ChoixOptionsRepository(CollectEats3Context context)
        {
            _context = context;
        }

        public IEnumerable<Choixoption> GetAll()
        {
            return _context.Choixoptions.ToList();
        }

        public Choixoption? GetById(int id)
        {
            return _context.Choixoptions.FirstOrDefault(co => co.Id == id);
        }

        public void Add(Choixoption choixOption)
        {
            _context.Choixoptions.Add(choixOption);
            _context.SaveChanges();
        }

        public void Update(Choixoption choixOption)
        {
            _context.Entry(choixOption).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var choixOption = _context.Choixoptions.FirstOrDefault(co => co.Id == id);
            if (choixOption != null)
            {
                _context.Choixoptions.Remove(choixOption);
                _context.SaveChanges();
            }
        }
    }
}
