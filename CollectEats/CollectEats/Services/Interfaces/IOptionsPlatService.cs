using CollectEats.Models;

namespace CollectEats.Services.Interfaces
{
    public interface IOptionsPlatService
    {
        IEnumerable<Optionsplat> GetAll();
        Optionsplat? GetById(int id);
        void Add(Optionsplat optionPlat);
        void Update(Optionsplat optionPlat);
        void Delete(int id);
    }
}
