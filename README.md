# 📚 Library Management System

A simple yet robust **Library Management System** built with a **C# .NET 8 backend** and **SQLite database**, and a modern **React + TypeScript frontend** styled using **Bootstrap**. It supports full **CRUD operations** on books and includes optional **JWT-based user authentication**.

---

## 📋 Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Backend Setup](#backend-setup)
* [API Endpoints](#api-endpoints)
* [Running Locally](#running-locally)
* [Testing with Postman](#testing-with-postman)
* [Frontend Setup](#frontend-setup)
* [Project Structure](#project-structure)
* [License](#license)

---

## 🚀 Features

* **Book Management**: Create, read, update, and delete books.
* **User Authentication**: Register/login with JWT tokens (optional).
* **RESTful API**: Swagger support for testing.
* **SQLite**: Lightweight database powered by EF Core.
* **React + TypeScript Frontend**: Clean and modular UI.
* **Bootstrap**: Responsive design and layout.

---

## 🧰 Prerequisites

### Backend:

* .NET 8.0 SDK
* Visual Studio 2022 (with .NET workload)
* SQLite (via NuGet)

### Frontend:

* Node.js (v16+ recommended)
* npm or yarn

---

## 🔧 Backend Setup

```bash
git clone https://github.com/heshanjeewantha/library-management-system.git
cd LibraryManagementSystem/Backend/LibraryManagementSystem
```

1. **Open in Visual Studio 2022**

   * Load `LibraryManagementSystem.sln`

2. **Restore NuGet Packages**

   * Right-click solution → Restore NuGet Packages
   * Or run: `dotnet restore`

3. **Configure JWT in `appsettings.json`**

```json
"Jwt": {
  "Key": "SecretKeyHere1234567890abcdeffff",
  "Issuer": "LibraryManagementSystem",
  "Audience": "LibraryManagementSystem"
}
```

4. **Apply Migrations**

```bash
cd LibraryManagementSystem/Backend/LibraryManagementSystem
dotnet ef migrations add InitialCreate
dotnet ef database update
```

5. **Run the Backend**

```bash
dotnet run
```

Open: [https://localhost:7235/swagger](https://localhost:7235/swagger)

---

## 🔗 API Endpoints

### 🔐 Auth

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| POST   | `/api/auth/register` | Register new user    |
| POST   | `/api/auth/login`    | Login, get JWT token |

### 📘 Books (JWT Required)

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| GET    | `/api/book`      | Get all books  |
| GET    | `/api/book/{id}` | Get book by ID |
| POST   | `/api/book`      | Create a book  |
| PUT    | `/api/book/{id}` | Update book    |
| DELETE | `/api/book/{id}` | Delete book    |

**Example Payloads:**

```json
// Register/Login
{
  "username": "testuser",
  "password": "Password123!"
}

// Create Book
{
  "title": "Sample Book",
  "author": "John Doe",
  "description": "A sample book description."
}
```

---

## 🖥️ Running Locally

1. Confirm `library.db` is created after migrations.
2. Browse Swagger UI: [https://localhost:7235/swagger](https://localhost:7235/swagger)
3. Use Postman for detailed testing.

---

## 🧪 Testing with Postman

1. **Register**:

   * POST `/api/auth/register`
   * Body:

```json
{
  "username": "testuser",
  "password": "Password123!"
}
```

2. **Login**:

   * POST `/api/auth/login`
   * Save the returned `token`

3. **Test Books API**:

   * Add `Authorization` header:

```
Authorization: Bearer <your-token>
```

---

## 🌐 Frontend Setup

```bash
cd LibraryManagementSystem/frontend
npm install
npm run dev
```

> Make sure the backend is running on `https://localhost:7235`.

**Pages Included:**

* `Login`, `Register`
* `Home` (book listing + update/delete)
* `Add Book`, `Update Book`

🔒 All book operations require login (token stored in `localStorage`).

---

## 📁 Project Structure

```
LibraryManagementSystem/
├── Backend/
│   └── LibraryManagementSystem/
│       ├── Controllers/
│       ├── Models/
│       ├── Data/
│       ├── Services/
│       ├── Program.cs
│       └── appsettings.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   ├── public/
│   ├── index.html
│   ├── App.tsx
│   └── main.tsx
└── README.md
```

---

## 📄 License

MIT License © 2025 Heshan Jeewantha

