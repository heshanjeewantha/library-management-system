Library Management System
  
A simple yet robust Library Management System built with a C# .NET backend and SQLite database. This application supports CRUD operations for managing book records and includes optional user authentication using JWT. Designed as part of an internship assignment, it demonstrates clean code, RESTful API design, and integration with Entity Framework Core.
Table of Contents

Features
Prerequisites
Backend Setup
API Endpoints
Running Locally
Testing with Postman
Project Structure
License

Features

Book Management: Create, read, update, and delete book records (title, author, description).
User Authentication: Register and login users with JWT-based authentication (optional feature).
RESTful API: Well-documented endpoints with Swagger integration.
SQLite Database: Lightweight database managed with Entity Framework Core.
Secure and Scalable: Includes input validation, error handling, and CORS support.

Prerequisites
Before setting up the project, ensure you have the following installed:

.NET 8.0 SDK
Visual Studio 2022 (with .NET development workload)
SQLite (included via NuGet packages)
Postman (for API testing)
Git (for version control)

Backend Setup
Follow these steps to set up and run the backend:

Clone the Repository:
git clone https://github.com/yourusername/LibraryManagementSystem.git
cd LibraryManagementSystem/Backend/LibraryManagementSystem


Open the Solution:

Open LibraryManagementSystem.sln in Visual Studio 2022.


Restore NuGet Packages:

In Visual Studio, right-click the solution in Solution Explorer and select Restore NuGet Packages.
Alternatively, run:dotnet restore




Configure JWT Key:

Open appsettings.json and replace the Jwt:Key value with a strong, unique key (at least 32 characters):"Jwt": {
  "Key": "YourSuperSecretKeyHere1234567890abcdef",
  "Issuer": "LibraryManagementSystem",
  "Audience": "LibraryManagementSystem"
}




Apply Database Migrations:

In the Package Manager Console (or terminal), navigate to the Backend/LibraryManagementSystem folder:cd <path-to-project>\LibraryManagementSystem\Backend\LibraryManagementSystem


Run the following commands to create and apply migrations:dotnet ef migrations add InitialCreate
dotnet ef database update


This creates the SQLite database (library.db) in the project folder.


Run the Backend:

Start the application in Visual Studio (F5) or via the terminal:dotnet run


The API will be available at https://localhost:7235/swagger (port may vary; check console output).



API Endpoints
The backend provides the following RESTful API endpoints, accessible via Swagger or Postman:
Books (Authenticated)
All book endpoints require a JWT token in the Authorization header (Bearer <token>).



Method
Endpoint
Description



GET
/api/books
List all book records


GET
/api/books/{id}
Get a book by ID


POST
/api/books
Create a new book record


PUT
/api/books/{id}
Update an existing book record


DELETE
/api/books/{id}
Delete a book record


Authentication



Method
Endpoint
Description



POST
/api/auth/register
Register a new user


POST
/api/auth/login
Login and receive a JWT token


Example Payloads:

Register:{
  "username": "testuser",
  "password": "Password123!"
}


Login:{
  "username": "testuser",
  "password": "Password123!"
}


Create Book:{
  "title": "Sample Book",
  "author": "John Doe",
  "description": "A sample book description."
}



Running Locally

Verify Database:

Ensure library.db exists in the Backend/LibraryManagementSystem folder after running migrations.
Use a SQLite browser (e.g., DB Browser for SQLite) to inspect the database if needed.


Access Swagger:

Navigate to https://localhost:7235/swagger in a browser to explore and test API endpoints interactively.


Test with Postman (see below).


Testing with Postman
To test the API endpoints using Postman:

Register a User:
Send a POST request to https://localhost:7235/api/auth/register with the register payload.


Login:
Send a POST request to https://localhost:7235/api/auth/login with the login payload.
Copy the returned JWT token.


Test Book Endpoints:
For any book-related request (e.g., GET /api/books), add an Authorization header:Authorization: Bearer <your-jwt-token>


Test CRUD operations using the payloads provided above.



Project Structure
LibraryManagementSystem/
├── Backend/
│   ├── LibraryManagementSystem/
│   │   ├── Controllers/          # API controllers (Books, Auth)
│   │   ├── Models/               # Entity models (Book)
│   │   ├── Data/                 # EF Core DbContext
│   │   ├── Services/             # JWT service and business logic
│   │   ├── Dtos/                 # Data Transfer Objects
│   │   ├── Program.cs            # Application entry point
│   │   ├── appsettings.json      # Configuration (JWT, DB connection)
│   │   ├── LibraryManagementSystem.csproj
│   ├── LibraryManagementSystem.sln
├── .gitignore                    # Ignores build artifacts, DB files, etc.
├── README.md                     # Project documentation

License
This project is licensed under the MIT License. See the LICENSE file for details.

Built with ❤️ by Heshan Jeewantha
