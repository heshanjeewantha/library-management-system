using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Book
    {
        public int Id { get; set; }

        [Required]
        [StringLength(200, MinimumLength = 1)]
        public string Title { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 1)]
        public string Author { get; set; }

        [StringLength(1000)]
        public string Description { get; set; }
    }
}
