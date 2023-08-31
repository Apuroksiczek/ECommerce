using ECommerce.Entities;

namespace Core.Specyfications
{
    public class ProductsWithBrandsAndTyepsSpecification : BaseSpecification<Product>
    {
        public ProductsWithBrandsAndTyepsSpecification()
        {
            AddInclude(p => p.ProductBrand);
            AddInclude(p => p.ProductType);
        }

        public ProductsWithBrandsAndTyepsSpecification(int id) : base(x => x.Id == id)
        {
            AddInclude(p => p.ProductBrand);
            AddInclude(p => p.ProductType);
        }
    }
}