---
title: 30 Basic Docker Commands
description: A comprehensive guide to the 30 basic Docker commands, categorized by usage.
---

Docker is a powerful tool for containerization, and knowing the basic commands is essential for managing Docker containers effectively. Here are 30 basic Docker commands, categorized by their usage.

## Docker Installation and Setup

1. **docker --version**
   ```sh
   docker --version
   ```
   Check the installed Docker version.

2. **docker info**
   ```sh
   docker info
   ```
   Display system-wide information about Docker.

3. **docker login**
   ```sh
   docker login
   ```
   Log in to the Docker Hub.

## Docker Images

4. **docker pull**
   ```sh
   docker pull <image_name>
   ```
   Pull an image from a Docker registry.

5. **docker images**
   ```sh
   docker images
   ```
   List all Docker images on the local system.

6. **docker rmi**
   ```sh
   docker rmi <image_id>
   ```
   Remove a Docker image.

7. **docker build**
   ```sh
   docker build -t <image_name> .
   ```
   Build a Docker image from a Dockerfile.

## Docker Containers

8. **docker run**
   ```sh
   docker run -d --name <container_name> <image_name>
   ```
   Run a container from an image.

9. **docker ps**
   ```sh
   docker ps
   ```
   List all running containers.

10. **docker ps -a**
    ```sh
    docker ps -a
    ```
    List all containers, including stopped ones.

11. **docker stop**
    ```sh
    docker stop <container_id>
    ```
    Stop a running container.

12. **docker start**
    ```sh
    docker start <container_id>
    ```
    Start a stopped container.

13. **docker restart**
    ```sh
    docker restart <container_id>
    ```
    Restart a container.

14. **docker rm**
    ```sh
    docker rm <container_id>
    ```
    Remove a container.

15. **docker exec**
    ```sh
    docker exec -it <container_id> /bin/bash
    ```
    Execute a command inside a running container.

## Docker Volumes

16. **docker volume create**
    ```sh
    docker volume create <volume_name>
    ```
    Create a new volume.

17. **docker volume ls**
    ```sh
    docker volume ls
    ```
    List all volumes.

18. **docker volume inspect**
    ```sh
    docker volume inspect <volume_name>
    ```
    Display detailed information about a volume.

19. **docker volume rm**
    ```sh
    docker volume rm <volume_name>
    ```
    Remove a volume.

## Docker Networks

20. **docker network create**
    ```sh
    docker network create <network_name>
    ```
    Create a new network.

21. **docker network ls**
    ```sh
    docker network ls
    ```
    List all networks.

22. **docker network inspect**
    ```sh
    docker network inspect <network_name>
    ```
    Display detailed information about a network.

23. **docker network connect**
    ```sh
    docker network connect <network_name> <container_name>
    ```
    Connect a container to a network.

24. **docker network disconnect**
    ```sh
    docker network disconnect <network_name> <container_name>
    ```
    Disconnect a container from a network.

## Docker Compose

25. **docker-compose up**
    ```sh
    docker-compose up
    ```
    Build, create, start, and attach to containers for a service defined in a `docker-compose.yml` file.

26. **docker-compose down**
    ```sh
    docker-compose down
    ```
    Stop and remove containers, networks, images, and volumes defined in a `docker-compose.yml` file.

27. **docker-compose ps**
    ```sh
    docker-compose ps
    ```
    List containers for a service defined in a `docker-compose.yml` file.

28. **docker-compose build**
    ```sh
    docker-compose build
    ```
    Build or rebuild services defined in a `docker-compose.yml` file.

29. **docker-compose logs**
    ```sh
    docker-compose logs
    ```
    View output from containers defined in a `docker-compose.yml` file.

30. **docker-compose exec**
    ```sh
    docker-compose exec <service_name> <command>
    ```
    Execute a command in a running container defined in a `docker-compose.yml` file.

These commands cover the basics of Docker and should help you get started with managing Docker containers, images, volumes, networks, and using Docker Compose for multi-container applications.
