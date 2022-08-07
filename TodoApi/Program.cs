using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
var builder = WebApplication.CreateBuilder(args);
string connection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<cardsContext>(opt => opt.UseSqlServer(connection));
// builder.Services.AddDbContext<TodoDb>(opt => opt.UseInMemoryDatabase("TodoList"));
// builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("*")
                                              .AllowAnyHeader()
                                               .AllowAnyMethod(); ;
                      });
});

var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/", () => "Hello World!");

app.MapGet("/cards", async (cardsContext db) =>
    await db.cards.ToListAsync());


// app.MapGet("/todoitems/complete", async (cardsContext db) =>
//     await db.cards.Where(t => t.IsComplete).ToListAsync());

// app.MapGet("/todoitems/{id}", async (int id, cardsContext db) =>
//     await db.cards.FindAsync(id)
//         is Card todo
//             ? Results.Ok(todo)
//             : Results.NotFound());

// app.MapPost("/todoitems", async (Card todo, cardsContext db) =>
// {
//     db.cards.Add(todo);
//     await db.SaveChangesAsync();

//     return Results.Created($"/todoitems/{todo.id}", todo);
// });

// app.MapPut("/todoitems/{id}", async (int id, Card inputTodo, cardsContext db) =>
// {
//     var todo = await db.cards.FindAsync(id);

//     if (todo is null) return Results.NotFound();

//     todo.Name = inputTodo.Name;
//     todo.IsComplete = inputTodo.IsComplete;

//     await db.SaveChangesAsync();

//     return Results.NoContent();
// });

// app.MapDelete("/todoitems/{id}", async (int id, cardsContext db) =>
// {
//     if (await db.cards.FindAsync(id) is Card todo)
//     {
//         db.cards.Remove(todo);
//         await db.SaveChangesAsync();
//         return Results.Ok(todo);
//     }

//     return Results.NotFound();
// }
// );

app.Run();

class Card
{
    [Key]
    public int id { get; set; }
    public string? category { get; set; }
    public string? label { get; set; }
    public string? groupe { get; set; }
    public string? dueDate { get; set; }
    public string? importance { get; set; }
    public string? estimate { get; set; }
}

class cardsContext : DbContext
{
    public cardsContext(DbContextOptions<cardsContext> options)
        : base(options) { }

    public DbSet<Card> cards => Set<Card>();
}