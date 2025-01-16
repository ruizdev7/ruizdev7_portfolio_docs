---
title: How to implement a Docker File para despleglar una aplicacion con backend en flask y forntend en react
description: A guide in my new Starlight docs site.
---

Guides lead a user through a specific task they want to accomplish, often with a sequence of steps.
Writing a good guide requires thinking about what your users are trying to do.

## Implementing a Dockerfile for ruizdev7-portfolio

This guide will show you how to create a Dockerfile to deploy the `ruizdev7-portfolio` project, which includes a Flask backend and a React frontend.

### Step 1: Create a Dockerfile for the Flask Backend

1. Create a file named `Dockerfile` in the root of your backend directory.
2. Add the following content to the `Dockerfile`:

    ```dockerfile
    # Use the official Python image from the Docker Hub
    FROM python:3.9-slim

    # Set the working directory
    WORKDIR /app

    # Copy the requirements file into the container
    COPY requirements.txt requirements.txt

    # Install the dependencies
    RUN pip install -r requirements.txt

    # Copy the rest of the application code into the container
    COPY . .

    # Set environment variables
    ENV FLASK_APP=run.py
    ENV FLASK_ENV=production

    # Expose the port the app runs on
    EXPOSE 5000

    # Run the application
    CMD ["flask", "run", "--host=0.0.0.0"]
    ```

### Step 2: Create a Dockerfile for the React Frontend

1. Create a file named `Dockerfile` in the root of your frontend directory.
2. Add the following content to the `Dockerfile`:

    ```dockerfile
    # Use the official Node.js image from the Docker Hub
    FROM node:14

    # Set the working directory
    WORKDIR /app

    # Copy the package.json and package-lock.json files into the container
    COPY package*.json ./

    # Install the dependencies
    RUN npm install

    # Copy the rest of the application code into the container
    COPY . .

    # Build the application
    RUN npm run build

    # Install serve to serve the build
    RUN npm install -g serve

    # Expose the port the app runs on
    EXPOSE 3000

    # Run the application
    CMD ["serve", "-s", "build"]
    ```

### Step 3: Create a Docker Compose File

1. Create a file named `docker-compose.yml` in the root of your project directory.
2. Add the following content to the `docker-compose.yml` file:

    ```yaml
    version: '3.8'

    services:
      backend:
        build:
          context: ./backend
        ports:
          - "5000:5000"
        environment:
          - FLASK_ENV=production

      frontend:
        build:
          context: ./frontend
        ports:
          - "3000:3000"
    ```

### Step 4: Build and Run the Docker Containers

1. Open a terminal and navigate to the root of your project directory.
2. Run the following command to build and start the containers:

    ```sh
    docker-compose up --build
    ```

Your Flask backend should now be running on `http://localhost:5000` and your React frontend on `http://localhost:3000`.

## Further reading

- Read [about how-to guides](https://diataxis.fr/how-to-guides/) in the Diátaxis framework
