using Api.Controllers;
using Api.Dtos;
using Api.Errors;
using AutoMapper;
using Core.Interfaces;
using Core.Specyfications;
using ECommerce.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Controllers
{
    public class ProductController : BaseApiController
    {
        private readonly IProductRepository _productRepository;
        private readonly IGenericRepository<ProductBrand> _productBrandRepository;
        private readonly IGenericRepository<ProductType> _productTypeRepository;
        private readonly IMapper _mapper;

        public ProductController(
            IProductRepository productRepository,
            IGenericRepository<ProductBrand> productBrandRepository,
            IGenericRepository<ProductType> productTypeRepository,
            IMapper mapper
            )
        {
            _productRepository = productRepository;
            _productBrandRepository = productBrandRepository;
            _productTypeRepository = productTypeRepository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts(
            string sort,
            int? brandId,
            int? typeId
            )
        {
            var spec = new ProductsWithBrandsAndTyepsSpecification(sort, brandId, typeId);

            var products = await _productRepository.ListAsync(spec);

            return Ok(_mapper.Map<List<ProductToReturnDto>>(products));
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(ApiResponse), StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ProductToReturnDto>> GetProduct(int id)
        {
            var spec = new ProductsWithBrandsAndTyepsSpecification(id);

            var product = await _productRepository.GetEntityWithSpec(spec);

            if (product == null)
            {
                return NotFound(new ApiResponse(404));
            }

            return _mapper.Map<ProductToReturnDto>(product);
        }

        [HttpGet("brands")]
        public async Task<ActionResult<IReadOnlyList<ProductBrand>>> GetProductBrands()
        {
            return Ok(await _productBrandRepository.GetAll());
        }

        [HttpGet("types")]
        public async Task<ActionResult<IReadOnlyList<ProductType>>> GetProductTypes()
        {
            return Ok(await _productTypeRepository.GetAll());
        }
    }
}