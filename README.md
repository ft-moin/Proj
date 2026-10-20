# College Feedback System

A starter full-stack college feedback application with a React 19 + Vite frontend, Java 21 + Spring Boot backend, and MySQL database.

## Requirements
- Node.js 20 or newer
- Java 21
- MySQL 8
- Internet access on first Maven/npm install

## 1. Configure MySQL
Create the database in MySQL Workbench or a MySQL terminal:
```sql
CREATE DATABASE college_feedback;
```
Or import/run `database/schema.sql`.

## 2. Configure backend
Open `backend/src/main/resources/application.properties`. Set `spring.datasource.password` to your own local MySQL password, or set the `DB_PASSWORD` environment variable. Do not publish real passwords.

From a terminal:
```powershell
cd backend
.\mvnw.cmd spring-boot:run
```
The API starts at `http://localhost:8080`.

## 3. Configure frontend
Open a second terminal:
```powershell
cd frontend
npm install
npm run dev
```
Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Important security note
This is a development starter, not production-ready. The admin page is a placeholder, and admin login/session handling, CSRF protection, and authorization must be properly configured before real deployment. Do not expose this project publicly with default or weak credentials.
