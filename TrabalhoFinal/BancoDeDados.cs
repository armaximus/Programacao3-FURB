using APIEsportivaWeb.Models;
using Microsoft.EntityFrameworkCore;

namespace APIEsportivaWeb
{
    public class BancoDeDados : DbContext
    {
        public DbSet<Atleta> Atletas { get; set; }
        public DbSet<Treinador> Treinadores { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }

        private const string stringConexao = @"Data Source=(LocalDb)\mssqllocaldb;Database=atletasetreinadores;Trusted_Connection=True;MultipleActiveResultSets=true;";

        public BancoDeDados(DbContextOptions<BancoDeDados> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Atleta>().ToTable("Atleta");
            modelBuilder.Entity<Treinador>().ToTable("Treinador");
            modelBuilder.Entity<Usuario>().ToTable("Usuario");
        }

        public static BancoDeDados ConectarNoBanco()
        {
            var optionsBuilder = new DbContextOptionsBuilder<BancoDeDados>();
            optionsBuilder.UseSqlServer(stringConexao);

            return new BancoDeDados(optionsBuilder.Options);
        }
    }
}
