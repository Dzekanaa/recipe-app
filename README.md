
# Recipe Management App

Angular frontend + Spring Boot backend + PostgreSQL.

## Requirements

- Java 21
- Node.js 22.22.3 or newer (use [nvm](https://github.com/nvm-sh/nvm): `nvm install 22`)
- Docker

## 1. Database

```bash
docker run --name recipe-db -e POSTGRES_USER=recipe -e POSTGRES_PASSWORD=recipe -e POSTGRES_DB=recipe_db -p 5433:5432 -d postgres:16
```

Next time just start it with `docker start recipe-db`.

## 2. Backend

```bash
cd backend
./mvnw spring-boot:run
```

On Windows use `mvnw.cmd spring-boot:run`. Runs on http://localhost:8080.

## 3. Frontend

```bash
cd frontend
npm install
npm start
```

Runs on http://localhost:4200.
