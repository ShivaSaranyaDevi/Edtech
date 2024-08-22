using Edtech.Data;
using Edtech.DTO;
using Edtech.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Edtech.Controllers
{
    [Route("api/Registered_StudentController")]
    [ApiController]
    public class Registered_StudentController : ControllerBase
    {
        private readonly EdtechDbContext _context;
        public Registered_StudentController(EdtechDbContext edtechDbContext)
        {
            _context = edtechDbContext;

        }


        [HttpPost]
        [Route("api/AddStudents")]

        public ActionResult<Registered_Students> addStudents( Registered_StudentsDTO dTO)
        {
            var student = new Registered_Students
            {
                profile_photo = dTO.profile_photo,
                first_name = dTO.first_name,
                last_name = dTO.last_name,
                father_name = dTO.father_name,
                date_of_birth = dTO.date_of_birth,
                email = dTO.email,
                password = dTO.password,
                contact_number = dTO.contact_number,
                city = dTO.city,

            };

            _context.Registered_Students.Add(student);
            _context.SaveChanges();
            return Ok(student);
        
        }

        [HttpGet]

        public ActionResult getStudents()
        {
            var students = _context.Registered_Students.ToList();
            if (students == null)
            {
                return NotFound();
            }

            return Ok(students);
        }

        [HttpGet("{email}/{password}")]

        public ActionResult getStudent(string email, string password)
        {
            var students = _context.Registered_Students.FirstOrDefault(u=>u.email == email&& u.password==password);
            if (students == null)
            {
                return NotFound();
            }

            return Ok(students);
        }
    }
}
