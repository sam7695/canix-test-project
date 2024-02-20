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

## UI

![canix-01](https://github.com/sam7695/canix-test-project/assets/133997107/0930ed88-e9e5-4bc6-8a5a-da0f34b4ebf9)
![canix-02](https://github.com/sam7695/canix-test-project/assets/133997107/3ca4aecf-e09e-4dcc-aaeb-d344a6e6f650)

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
    git clone https://github.com/sam7695/canix-test-project.git
    cd canix-test-project
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
