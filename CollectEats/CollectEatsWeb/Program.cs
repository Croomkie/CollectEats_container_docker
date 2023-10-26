using CollectEats.Data;
using CollectEats.Repositories;
using CollectEats.Repositories.Interfaces;
using CollectEats.Services;
using CollectEats.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//Injection de d�pendances
builder.Services.AddDbContext<CollectEats3Context>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("localDbConnectionStrings")));

//Repository
builder.Services.AddScoped<IAdressesRepository, AdressesRepository>();
builder.Services.AddScoped<IChoixOptionsRepository, ChoixOptionsRepository>();
builder.Services.AddScoped<IHorairesOuvertureRepository, HorairesOuvertureRepository>();
builder.Services.AddScoped<IOptionsPlatRepository, OptionsPlatRepository>();
builder.Services.AddScoped<IPlatsRepository, PlatsRepository>();
builder.Services.AddScoped<IRestaurantsRepository, RestaurantsRepository>();
builder.Services.AddScoped<IUtilisateursRepository, UtilisateursRepository>();

//Services
builder.Services.AddScoped<IAdressesService, AdressesService>();
builder.Services.AddScoped<IChoixOptionsService, ChoixOptionsService>();
builder.Services.AddScoped<IHorairesOuvertureService, HorairesOuvertureService>();
builder.Services.AddScoped<IOptionsPlatService, OptionsPlatService>();
builder.Services.AddScoped<IPlatsService, PlatsService>();
builder.Services.AddScoped<IRestaurantsService, RestaurantsService>();
builder.Services.AddScoped<IUtilisateursService, UtilisateursService>();

//Swagger configuration
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new Microsoft.OpenApi.Models.OpenApiInfo { Title = "CollectEats", Version = "v1" });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "CollectEats V1");
    });
}

// app.UseHttpsRedirection();
app.UseHttpLogging();

app.UseAuthorization();

app.MapControllers();

app.Run();
