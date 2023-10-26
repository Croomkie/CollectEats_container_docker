using CollectEats.Models;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services.Interfaces;

namespace CollectEats.Services
{
    public class OptionsPlatService : IOptionsPlatService
    {
        private readonly IOptionsPlatRepository _optionPlatRepository;

        public OptionsPlatService(IOptionsPlatRepository optionPlatRepository)
        {
            _optionPlatRepository = optionPlatRepository;
        }

        public IEnumerable<Optionsplat> GetAll()
        {
            return _optionPlatRepository.GetAll();
        }

        public Optionsplat? GetById(int id)
        {
            return _optionPlatRepository.GetById(id);
        }

        public void Add(Optionsplat optionPlat)
        {
            _optionPlatRepository.Add(optionPlat);
        }

        public void Update(Optionsplat optionPlat)
        {
            _optionPlatRepository.Update(optionPlat);
        }

        public void Delete(int id)
        {
            _optionPlatRepository.Delete(id);
        }
    }
}
