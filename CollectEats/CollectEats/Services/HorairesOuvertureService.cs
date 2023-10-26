using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services.Interfaces;

namespace CollectEats.Services
{
    public class HorairesOuvertureService : IHorairesOuvertureService
    {
        private readonly IHorairesOuvertureRepository _horairesOuvertureRepository;

        public HorairesOuvertureService(IHorairesOuvertureRepository horairesOuvertureRepository)
        {
            _horairesOuvertureRepository = horairesOuvertureRepository;
        }

        public IEnumerable<Horairesouverture> GetAll()
        {
            return _horairesOuvertureRepository.GetAll();
        }

        public Horairesouverture? GetById(int id)
        {
            return _horairesOuvertureRepository.GetById(id);
        }

        public void Add(Horairesouverture horairesOuverture)
        {
            _horairesOuvertureRepository.Add(horairesOuverture);
        }

        public void Update(Horairesouverture horairesOuverture)
        {
            _horairesOuvertureRepository.Update(horairesOuverture);
        }

        public void Delete(int id)
        {
            _horairesOuvertureRepository.Delete(id);
        }
    }
}
