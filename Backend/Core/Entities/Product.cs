﻿using Core.Entities;

namespace ECommerce.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string PictureUrl { get; set; }
        public virtual ProductType ProductType { get; set; }
        public int ProductTypeId { get; set; }
        public virtual ProductBrand ProductBrand { get; set; }
        public int ProductBrandId { get; set; }
    }
}