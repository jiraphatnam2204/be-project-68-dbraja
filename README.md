# Online Job Fair Registration API

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/iG82Gnyy)

The **Online Job Fair Registration API** is a robust backend system built with Node.js, Express, and MongoDB. It's designed to manage job fair registrations, allowing users to browse participating companies and book interviews/registrations within a controlled environment.

## 🚀 Features

-   **Authentication:** Secure registration and login using JWT.
-   **User Roles:** Different levels of access for Guests, Registered Users, and Admins.
-   **Company Management:** CRUD operations for companies (Admin only).
-   **Registration System:** Users can register for up to 3 company interviews.
-   **Security:** Implements Helmet, CORS, Rate Limiting, and Data Sanitization to protect against common web vulnerabilities.
-   **Documentation:** Interactive API documentation via Swagger UI.

## 🛠️ Tech Stack

-   **Backend:** Node.js, Express
-   **Database:** MongoDB with Mongoose
-   **Authentication:** JWT, bcryptjs
-   **Documentation:** Swagger UI, OpenAPI 3.0
-   **Security Middleware:** Helmet, HPP, express-rate-limit, express-mongo-sanitize, express-xss-sanitizer

## 📖 Documentation & Use Case Diagram

For a detailed breakdown of system actors and the use case diagram (PlantUML), please refer to the:
👉 **[Intro Presentation & Use Case Diagram](docs/IntroPresentation.md)**

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/2110503-CEDT68/be-project-68-dbraja.git
    cd be-project-68-dbraja
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env` file in the `config/` directory based on `config/.env.example`:
    ```env
    PORT=5000
    NODE_ENV=development
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    JWT_EXPIRE=30d
    JWT_COOKIE_EXPIRE=30
    ```

4.  **Seed Data (Optional):**
    To populate the database with initial company data:
    ```bash
    node seeder -i
    ```

## 🏃 Running the Application

-   **Development mode (with nodemon):**
    ```bash
    npm run dev
    ```

-   **Production mode:**
    ```bash
    npm start
    ```

The API will be accessible at `http://localhost:5000`.

## 📍 API Endpoints (Brief Overview)

-   `/api/v1/auth`: Authentication routes (Register, Login, Logout, Me)
-   `/api/v1/companies`: Company management routes
-   `/api/v1/registrations`: Registration management routes
-   `/api-docs`: Swagger API Documentation

---
Developed as part of the Software Development Practice course.
