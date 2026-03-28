# Online Job Fair Registration API

[![Railway Deployment](https://img.shields.io/badge/Railway-Deployment-blue?logo=railway)](https://be-project-68-dbraja-production.up.railway.app)
[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployment-black?logo=vercel)](https://be-project-68-dbraja.vercel.app)
[![Node.js](https://img.shields.io/badge/Node.js-v14+-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://www.mongodb.com/cloud/atlas)

A robust backend system built with Node.js, Express, and MongoDB for managing job fair registrations. This API enables users to browse participating companies and book interview slots while providing administrators with full control over the platform's data.

## 🚀 Features

- **Authentication & Authorization**: Secure JWT-based authentication with cookie support. Role-based access control (RBAC) for `user` and `admin` roles.
- **Company Management**: Complete CRUD operations for participating companies, including details like website, description, and contact information.
- **Registration System**:
  - Users can register for up to 3 company interviews.
  - Appointment dates are restricted to the job fair period (e.g., May 10-13, 2022).
  - Users can manage their own registrations (View, Update, Delete).
  - Admins can view and manage all registrations across the platform.
  - Admins can view overall registration statistics including total counts and per-company breakdown.
- **Advanced Security**:
  - **Data Sanitization**: Against NoSQL injection and XSS attacks.
  - **Security Headers**: Implemented via Helmet.
  - **Rate Limiting**: Prevents brute-force and DoS attacks.
  - **HPP**: Protection against HTTP Parameter Pollution.
  - **CORS**: Configured for secure cross-origin resource sharing.
- **API Documentation**: Interactive Swagger UI for easy testing and integration.

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (via Mongoose ODM)
- **Security**: JWT, bcryptjs, Helmet, Express-Mongo-Sanitize, Express-XSS-Sanitizer, Rate-Limit, HPP
- **Documentation**: Swagger UI, OpenAPI 3.0

## 📖 Project Structure & Design

For a detailed breakdown of system actors and the use case diagram, please refer to:
👉 **[Intro Presentation & Use Case Diagram](docs/IntroPresentation.md)**

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/2110503-CEDT68/be-project-68-dbraja.git
   cd be-project-68-dbraja
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `config/config.env` file (the application expects this specific path) based on `config/.env.example`:

   ```env
   PORT=5000
   NODE_ENV=development
   MONGO_URI=your_mongodb_atlas_uri
   JWT_SECRET=your_complex_secret
   JWT_EXPIRE=30d
   JWT_COOKIE_EXPIRE=30
   ```

4. **Seed Database:**
   Populate the database with initial companies, users, and registrations:

   ```bash
   # Import Data
   node seeder.js

   # Delete All Data
   node seeder.js -d
   ```

   _Note: Default admin credentials after seeding: `admin@dbraja.com` | `password123`_

## 🏃 Running the Application

- **Development Mode**:
  ```bash
  npm run dev
  ```
- **Production Mode**:
  ```bash
  npm start
  ```
  The server will start at `http://localhost:5000` by default.

## 📍 API Reference

### Auth Endpoints

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - User login
- `GET /api/v1/auth/me` - Get current logged-in user profile
- `GET /api/v1/auth/logout` - Logout user

### Companies Endpoints

- `GET /api/v1/companies` - Get all companies (Public)
- `GET /api/v1/companies/:id` - Get a single company (Public)
- `POST /api/v1/companies` - Create a new company (Admin Only)
- `PUT /api/v1/companies/:id` - Update a company (Admin Only)
- `DELETE /api/v1/companies/:id` - Delete a company (Admin Only)

### Registrations Endpoints

- `GET /api/v1/registrations` - Get all registrations (User: own, Admin: all)
- `GET /api/v1/registrations/stats` - Get overall registration statistics (Admin Only)
- `GET /api/v1/registrations/:id` - Get a specific registration
- `POST /api/v1/companies/:companyId/registrations` - Register for an interview with a company
- `PUT /api/v1/registrations/:id` - Update an existing registration
- `DELETE /api/v1/registrations/:id` - Cancel/Delete a registration

### Documentation

- `GET /api-docs` - Interactive Swagger UI Documentation

---

**Course:** Software Development Practice
**Project:** Online Job Fair Registration System
