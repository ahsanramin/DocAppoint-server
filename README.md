DocAppoint - Server
This is the backend server for DocAppoint, a Doctor Appointment Booking System. It provides RESTful APIs for authentication, doctor management, appointment booking, and user profile handling. Built with Node.js, Express, and MongoDB, it ensures secure data exchange using JWT and supports both local and Google OAuth2 authentication.

📌 Live API Base URL
Replace with your actual deployed server URL (e.g., Render, Railway, Vercel)

text
https://docappoint-server.onrender.com
🚀 Features
User Authentication (Local + Google OAuth)

Registration with password validation (uppercase, lowercase, min 6 chars)

Login with JWT token generation

Google Sign‑In using Google Identity Services

Protected route middleware

Doctor Management

Fetch all doctors with optional search by name

Get single doctor details by ID

Appointment Management

Book a new appointment (requires authentication)

Retrieve all appointments for the logged‑in user

Update appointment details (patient info, date, time)

Delete an appointment

User Profile

Get profile of authenticated user

Update name and profile photo

Database Seeding

Pre‑defined doctor data (50+ specialists) ready to import

Security

Passwords hashed with bcryptjs

JWT authentication with Bearer token

CORS enabled

Environment variables for sensitive data

🛠️ Tech Stack
Runtime: Node.js

Framework: Express.js

Database: MongoDB with Mongoose ODM

Authentication: JSON Web Tokens (JWT), Google OAuth2 (via google-auth-library)

Validation: Manual validation for registration password

Logging: Morgan

Environment: dotenv

