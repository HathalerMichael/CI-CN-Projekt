var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/ping", () => "pong");

app.Run();

// Make the implicit Program class public so test projects can access it
public partial class Program { }
