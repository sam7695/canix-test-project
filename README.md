# Canix Take Home Assessment

This contains both the frontend and backend components for a web application designed to streamline product management and user interactions. The frontend is built with React, offering a dynamic user interface, while the backend, developed with Ruby on Rails, provides robust API services and database management. The application is Dockerized for easy development, testing, and deployment.

## Project Overview

- **Backend**: Ruby on Rails API that interacts with a PostgreSQL database to manage products.
- **Frontend**: React application that communicates with the Rails API to display products and allow users to upload new csv files.

## Features

- Upload CSV
- Products Grouped By Category
- Total Weight per Category
- Weighing Process Starting Date

## Built With

- **Frontend**
  - React
  - Axios for API requests
- **Backend**
  - Ruby on Rails 7.0
  - PostgreSQL for data persistence
- **Containerization**
  - Docker & Docker Compose

## Getting Started

### Prerequisites

Docker and Docker Compose must be installed on the system to run the application in containers.

### Setup & Installation

1. **Clone the Repository**:

    ```bash
    git clone <Repo>
    cd canix-project
    ```

2. **Environment Setup**:

    Copy the .env.example file located in the frontend directory to .env and adjust the environment variables as necessary.

3. **Build and Run with Docker**:

    From the root of the project directory, run:

    ```bash
    docker-compose build
    docker-compose up -d
    ```

    These commands builds the Docker images for both the frontend and backend and starts the services.

### Accessing the Application

- **Frontend**: Visit `http://localhost:3000` in browser to interact with the React application.
- **Backend API**: The Rails API is accessible at `http://localhost:3001`. API endpoints include only products.
