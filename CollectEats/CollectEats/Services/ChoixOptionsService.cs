using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services.Interfaces;

namespace CollectEats.Services
{
    public class ChoixOptionsService : IChoixOptionsService
    {
        private readonly IChoixOptionsRepository _choixOptionRepository;

        public ChoixOptionsService(IChoixOptionsRepository choixOptionRepository)
        {
            _choixOptionRepository = choixOptionRepository;
        }

        public IEnumerable<Choixoption> GetAll()
        {
            return _choixOptionRepository.GetAll();
        }

        public Choixoption? GetById(int id)
        {
            return _choixOptionRepository.GetById(id);
        }

        public void Add(Choixoption choixOption)
        {
            _choixOptionRepository.Add(choixOption);
        }

        public void Update(Choixoption choixOption)
        {
            _choixOptionRepository.Update(choixOption);
        }

        public void Delete(int id)
        {
            _choixOptionRepository.Delete(id);
        }
    }
}
