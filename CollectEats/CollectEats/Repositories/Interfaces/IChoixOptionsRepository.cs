using CollectEats.Models;

namespace CollectEats.Repositories.Interfaces
{
    public interface IChoixOptionsRepository
    {
        IEnumerable<Choixoption> GetAll();
        Choixoption? GetById(int id);
        void Add(Choixoption choixOption);
        void Update(Choixoption choixOption);
        void Delete(int id);
    }
}
