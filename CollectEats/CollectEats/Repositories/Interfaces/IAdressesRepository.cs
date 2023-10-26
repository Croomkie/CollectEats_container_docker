using CollectEats.Models;

namespace CollectEats.Repositories.Interfaces
{
    public interface IAdressesRepository
    {
        IEnumerable<Adress> GetAll();
        Adress? GetById(int id);
        void Add(Adress adresse);
        void Update(Adress adresse);
        void Delete(int id);
    }
}
