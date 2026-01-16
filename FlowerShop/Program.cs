using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// CORS für Angular (localhost + Azure)
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins(
                "http://localhost:4200",  // Lokale Entwicklung
                "https://5ahif-group2-ui-cnhnebcscraphvbn.westeurope-01.azurewebsites.net" // Azure Production
              )
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

app.UseCors();

app.MapGet("/ping", () => "ohio from FlowerShop backend!");

app.Run();
public partial class Program { }
