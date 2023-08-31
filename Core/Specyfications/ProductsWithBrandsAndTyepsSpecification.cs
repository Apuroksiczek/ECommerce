using ECommerce.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;

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