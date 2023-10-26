using CollectEats.Models;

namespace CollectEats.Services.Interfaces
{
    public interface IHorairesOuvertureService
    {
        IEnumerable<Horairesouverture> GetAll();
        Horairesouverture? GetById(int id);
        void Add(Horairesouverture horairesOuverture);
        void Update(Horairesouverture horairesOuverture);
        void Delete(int id);
    }
}
