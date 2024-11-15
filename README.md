# Flight Tracking App

## Project Overview
The Flight Tracking App is a full-stack application designed to manage a list of flights across India. It centralizes flight data, allowing users to easily perform CRUD (Create, Read, Update, Delete) operations to keep flight information up-to-date, including details like travel ID, destination, duration, and fare.

## Tech Stack
- **Frontend**: React with Vite, TailwindCSS for styling
- **Backend**: Node.js, Express, MongoDB
- **Database**: MongoDB

## Table of Contents
1. [Project Structure](#project-structure)
2. [Database Design](#database-design)
3. [API Endpoints](#api-endpoints)
4. [Frontend Components](#frontend-components)
5. [Backend Architecture](#backend-architecture)
6. [Additional Functionalities](#additional-functionalities)

---

### 1. Project Structure

- **Backend**: Contains the Node.js API server.
  - `controllers/`: Business logic for CRUD operations.
  - `models/`: Mongoose models defining the MongoDB schema.
  - `routes/`: API routes for flight management.
- **Frontend**: React application for the user interface.

### 2. Database Design
Collection: **flightmodels**

| Field       | Type      | Description                   |
|-------------|-----------|-------------------------------|
| `_id`       | ObjectId  | Unique identifier             |
| `flight_id` | String    | Flight ID                     |
| `airline`   | String    | Airline name                  |
| `destination` | String  | Flight destination            |
| `fare`      | Number    | Cost of the flight            |
| `duration`  | Number    | Duration of the flight        |

### 3. API Endpoints
- **Base URL**: `http://localhost:3000`

| Method | Endpoint                 | Description                 | Request Body                                   | Response         |
|--------|---------------------------|-----------------------------|------------------------------------------------|------------------|
| GET    | `/api/flightmodels`       | Fetch all flights           | -                                              | Array of flights |
| GET    | `/api/flightmodels/:id`   | Fetch specific flight       | -                                              | Flight details   |
| POST   | `/api/flightmodels`       | Add new flight              | `{ flight_id, airline, destination, fare, duration }` | New flight |
| PUT    | `/api/flightmodels/:id`   | Update flight by ID         | `{ flight_id, airline, destination, fare, duration }` | Updated flight |
| DELETE | `/api/flightmodels/:id`   | Delete flight by ID         | -                                              | Deletion status  |

### 4. Frontend Components
- **Pages**
  - **HomePage**: Displays list of flights with add, edit, and delete options.
  - **AddFlight**: Form to add a new flight.
  - **EditFlight**: Pre-filled form for updating existing flight data.
- **Reusable Components**
  - **Header**: Common header displayed across pages.
  - **Footer**: Common footer across pages.

### 5. Backend Architecture
- **Controllers**: Handle CRUD operations for flights.
- **Routes**: Define routes and attach respective controller functions.
- **Server Setup (app.js)**: Initializes the server, connects to MongoDB, and sets up API routes.

### 6. Additional Functionalities
- **Validation**: Input validation on both frontend and backend.
- **Styling**: TailwindCSS for a responsive, user-friendly interface.
