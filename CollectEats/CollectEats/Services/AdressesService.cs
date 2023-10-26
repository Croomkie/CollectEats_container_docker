using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services.Interfaces;

namespace CollectEats.Services
{
    public class AdressesService : IAdressesService
    {
        private readonly IAdressesRepository _adresseRepository;

        public AdressesService(IAdressesRepository adresseRepository)
        {
            _adresseRepository = adresseRepository;
        }

        public IEnumerable<Adress> GetAll()
        {
            return _adresseRepository.GetAll();
        }

        public Adress? GetById(int id)
        {
            return _adresseRepository.GetById(id);
        }

        public void Add(Adress adresse)
        {
            _adresseRepository.Add(adresse);
        }

        public void Update(Adress adresse)
        {
            _adresseRepository.Update(adresse);
        }

        public void Delete(int id)
        {
            _adresseRepository.Delete(id);
        }
    }
}
