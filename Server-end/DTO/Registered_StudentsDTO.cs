using System.ComponentModel.DataAnnotations;

namespace Edtech.DTO
{
    public class Registered_StudentsDTO
    {
        public string profile_photo { get; set; }
        [Required]
        public string first_name { get; set; }
        [Required]
        public string last_name { get; set; }
        [Required]
        public string father_name { get; set; }
        [Required]
        public DateTime date_of_birth { get; set; }
        [Required]
        public string email { get; set; }

        [Required]
        public string password { get; set; }
        [Required]
        public string contact_number { get; set; }
        [Required]
        public string city { get; set; }
    }
}
