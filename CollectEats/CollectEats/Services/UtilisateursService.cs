using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services.Interfaces;

namespace CollectEats.Services
{
    public class UtilisateursService : IUtilisateursService
    {
        private readonly IUtilisateursRepository _utilisateurRepository;

        public UtilisateursService(IUtilisateursRepository utilisateurRepository)
        {
            _utilisateurRepository = utilisateurRepository;
        }

        public IEnumerable<Utilisateur> GetAll()
        {
            return _utilisateurRepository.GetAll();
        }

        public Utilisateur? GetById(int id)
        {
            return _utilisateurRepository.GetById(id);
        }

        public void Add(Utilisateur utilisateur)
        {
            _utilisateurRepository.Add(utilisateur);
        }

        public void Update(Utilisateur utilisateur)
        {
            _utilisateurRepository.Update(utilisateur);
        }

        public void Delete(int id)
        {
            _utilisateurRepository.Delete(id);
        }
    }
}
