using Edtech.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<EdtechDbContext>(options =>options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddCors(options=>options.AddPolicy("startwitspecificorigin", builder =>
{
    builder.WithOrigins("http://127.0.0.1:5173", "http://127.0.0.1:5174")
    .AllowAnyHeader()
    .AllowAnyMethod();
}));
builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("startwitspecificorigin");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
