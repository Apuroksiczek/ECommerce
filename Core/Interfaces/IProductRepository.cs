using ECommerce.Entities;

namespace Core.Interfaces
{
    public interface IProductRepository
    {
        Task<Product> GetProductByIdAsync(int id);

        Task<IReadOnlyList<Product>> GetAllProductsAsync();

        Task<IReadOnlyList<ProductBrand>> GetProductsBrandsAsync();

        Task<IReadOnlyList<ProductType>> GetProductsTypesAsync();
    }
}