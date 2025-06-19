# library-management-system

Library Management System
A simple Library Management System with a C# .NET backend and SQLite database. Supports CRUD operations for books and user authentication (optional).
Prerequisites

.NET 8.0 SDK
Visual Studio 2022
SQLite (included via NuGet)

Backend Setup

Open LibraryManagementSystem.sln in Visual Studio.
Restore NuGet packages.
Update appsettings.json with a strong JWT key (at least 32 characters).
Run migrations to create the SQLite database:dotnet ef migrations add InitialCreate
dotnet ef database update


Run the backend:dotnet run


Access the API at https://localhost:7235/swagger.

API Endpoints

Books:
GET /api/books: List all books (requires authentication).
GET /api/books/{id}: Get book by ID (requires authentication).
POST /api/books: Create a book (requires authentication).
PUT /api/books/{id}: Update a book (requires authentication).
DELETE /api/books/{id}: Delete a book (requires authentication).


Authentication:
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login and receive a JWT token.



Running Locally

Ensure the SQLite database (library.db) is created via migrations.
Use Postman to test API endpoints.
Include the JWT token in the Authorization header as Bearer <token> for protected endpoints.

