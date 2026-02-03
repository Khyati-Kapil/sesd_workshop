# Expense Tracker Backend

An expense tracker backend built using Node.js, Express, TypeScript, and MongoDB for managing expenses.  
The project follows Object-Oriented Programming (OOP) principles with a clean layered architecture.

This implementation is inspired by the SESD workshop reference repository and extends it with services and repositories for better separation of concerns.

---

## Features

- Create, read, and delete expenses
- Search expenses by title
- Sorting and pagination
- Input validation
- Clean error handling
- MongoDB integration using Mongoose
- TypeScript with class-based OOP

---

## Project Structure

src/  
 ├── controllers/  
 ├── services/  
 ├── repositories/  
 ├── models/  
 ├── routes/  
 ├── utils/  
 ├── app.ts  
 └── server.ts  

---

## Architecture

- Routes handle endpoint mapping
- Controllers handle HTTP logic
- Services contain business logic and validation
- Repositories manage database operations
- Models define MongoDB schemas

---

## Tech Stack

Node.js, Express.js, TypeScript, MongoDB, Mongoose