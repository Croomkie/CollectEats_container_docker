using CollectEats.Models;

namespace CollectEats.Services.Interfaces
{
    public interface IUtilisateursService
    {
        IEnumerable<Utilisateur> GetAll();
        Utilisateur? GetById(int id);
        void Add(Utilisateur utilisateur);
        void Update(Utilisateur utilisateur);
        void Delete(int id);
    }
}
