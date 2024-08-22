using System.ComponentModel.DataAnnotations;

namespace Edtech.Models
{
    public class Registered_Students
    {
        [Key]
        public int student_id { get; set; }
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
        public DateTime joining_date { get; set; } = DateTime.Now;

    }
}
