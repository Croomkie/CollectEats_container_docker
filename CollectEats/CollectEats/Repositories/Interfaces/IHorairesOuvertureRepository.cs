using CollectEats.Models;

namespace CollectEats.Repositories.Interfaces
{
    public interface IHorairesOuvertureRepository
    {
        IEnumerable<Horairesouverture> GetAll();
        Horairesouverture? GetById(int id);
        IEnumerable<Horairesouverture> GetByRestaurantId(int restaurantId);
        void Add(Horairesouverture horaire);
        void Update(Horairesouverture horaire);
        void Delete(int id);
    }
}
