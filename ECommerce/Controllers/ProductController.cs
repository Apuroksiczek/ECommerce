using ECommerce.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ECommerce.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            return null;
        }

        [HttpGet("{id}")]
        public async Task<Product> GetProduct(int id)
        {
            return null;
        }
    }
}