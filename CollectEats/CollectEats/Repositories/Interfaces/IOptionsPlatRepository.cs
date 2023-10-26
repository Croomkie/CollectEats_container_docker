using CollectEats.Models;

namespace CollectEats.Repositories.Interfaces
{
    public interface IOptionsPlatRepository
    {
        IEnumerable<Optionsplat> GetAll();
        Optionsplat? GetById(int id);
        IEnumerable<Optionsplat> GetByChoixOptionId(int choixOptionId);
        void Add(Optionsplat optionPlat);
        void Update(Optionsplat optionPlat);
        void Delete(int id);
    }
}
