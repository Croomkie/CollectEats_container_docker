using CollectEats.Data;
using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Repositories
{
    public class OptionsPlatRepository : IOptionsPlatRepository
    {
        private readonly CollectEats3Context _context;

        public OptionsPlatRepository(CollectEats3Context context)
        {
            _context = context;
        }

        public IEnumerable<Optionsplat> GetAll()
        {
            return _context.Optionsplats.Include(op => op.Choixoption).ToList();
        }

        public Optionsplat? GetById(int id)
        {
            return _context.Optionsplats.Include(op => op.Choixoption).FirstOrDefault(op => op.Id == id);
        }

        public IEnumerable<Optionsplat> GetByChoixOptionId(int choixOptionId)
        {
            return _context.Optionsplats.Include(op => op.Choixoption).Where(op => op.Id == choixOptionId).ToList();
        }

        public void Add(Optionsplat optionPlat)
        {
            _context.Optionsplats.Add(optionPlat);
            _context.SaveChanges();
        }

        public void Update(Optionsplat optionPlat)
        {
            _context.Entry(optionPlat).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var optionPlat = _context.Optionsplats.FirstOrDefault(op => op.Id == id);
            if (optionPlat != null)
            {
                _context.Optionsplats.Remove(optionPlat);
                _context.SaveChanges();
            }
        }
    }
}
