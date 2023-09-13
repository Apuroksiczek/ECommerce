using System.ComponentModel.DataAnnotations;

namespace Api.Dtos
{
    public class BasketItemDto
    {
        [Required]
        public int Id { get; set; }

        [Required]
        public string ProductName { get; set; }

        [Required]
        [Range(1, double.MaxValue, ErrorMessage = "Price must be greather than zero")]
        public decimal Price { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Quantity must be greather than zero")]
        public int Quantity { get; set; }

        [Required]
        public string PictureUrl { get; set; }

        [Required]
        public string Branded { get; set; }

        [Required]
        public string Type { get; set; }
    }
}