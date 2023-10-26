using CollectEats.Models;

namespace CollectEats.Repositories.Interfaces
{
    public interface IUtilisateursRepository
    {
        IEnumerable<Utilisateur> GetAll();
        Utilisateur? GetById(int id);
        void Add(Utilisateur utilisateur);
        void Update(Utilisateur utilisateur);
        void Delete(int id);
    }
}
