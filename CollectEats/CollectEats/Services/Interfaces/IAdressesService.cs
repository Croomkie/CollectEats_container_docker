using CollectEats.Models;

namespace CollectEats.Services.Interfaces
{
    public interface IAdressesService
    {
        IEnumerable<Adress> GetAll();
        Adress? GetById(int id);
        void Add(Adress adresse);
        void Update(Adress adresse);
        void Delete(int id);
    }
}
