using CollectEats.Data;
using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CollectEats.Repositories
{
    public class AdressesRepository : IAdressesRepository
    {
        private readonly CollectEats3Context _context;

        public AdressesRepository(CollectEats3Context context)
        {
            _context = context;
        }

        public IEnumerable<Adress> GetAll()
        {
            return _context.Adresses.ToList();
        }

        public Adress? GetById(int id)
        {
            return _context.Adresses.FirstOrDefault(a => a.Id == id);
        }

        public void Add(Adress adresse)
        {
            _context.Adresses.Add(adresse);
            _context.SaveChanges();
        }

        public void Update(Adress adresse)
        {
            _context.Entry(adresse).State = EntityState.Modified;
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var adresse = _context.Adresses.FirstOrDefault(a => a.Id == id);
            if (adresse != null)
            {
                _context.Adresses.Remove(adresse);
                _context.SaveChanges();
            }
        }
    }
}
