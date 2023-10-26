using CollectEats.Models;

namespace CollectEats.Services.Interfaces
{
    public interface IChoixOptionsService
    {
        IEnumerable<Choixoption> GetAll();
        Choixoption? GetById(int id);
        void Add(Choixoption choixOption);
        void Update(Choixoption choixOption);
        void Delete(int id);
    }
}
