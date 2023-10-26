using CollectEats.Data;
using CollectEats.Models;
using CollectEats.Repositories.Interfaces;

namespace CollectEats.Repositories
{
    public class UtilisateursRepository : IUtilisateursRepository
    {
        private readonly CollectEats3Context _context;

        public UtilisateursRepository(CollectEats3Context context)
        {
            _context = context;
        }

        public IEnumerable<Utilisateur> GetAll()
        {
            return _context.Utilisateurs.ToList();
        }

        public Utilisateur? GetById(int id)
        {
            return _context.Utilisateurs.FirstOrDefault(u => u.Id == id);
        }

        public void Add(Utilisateur utilisateur)
        {
            _context.Utilisateurs.Add(utilisateur);
            _context.SaveChanges();
        }

        public void Update(Utilisateur utilisateur)
        {
            _context.Utilisateurs.Update(utilisateur);
            _context.SaveChanges();
        }

        public void Delete(int id)
        {
            var utilisateur = GetById(id);
            if (utilisateur != null)
            {
                _context.Utilisateurs.Remove(utilisateur);
                _context.SaveChanges();
            }
        }
    }
}
