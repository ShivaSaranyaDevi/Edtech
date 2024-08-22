using Edtech.Models;
using Microsoft.EntityFrameworkCore;

namespace Edtech.Data
{
    public class EdtechDbContext : DbContext
    {
        public EdtechDbContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {
            
        }

        public DbSet<Registered_Students> Registered_Students { get; set; }
    }
}
