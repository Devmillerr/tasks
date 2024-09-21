# Task API

A simple Task API built with Node.js, Express, Prisma, and PostgreSQL. It allows users to create, read, update, and delete tasks.

## Features

- CRUD operations for tasks.
- Uses PostgreSQL for data storage.
- Automatically restarts the server on changes using `nodemon`.

## Requirements

- [Node.js](https://nodejs.org/) (v14 or higher)
- [PostgreSQL](https://www.postgresql.org/)
- [Yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/task-manager-api.git
   cd task-manager-api
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   ```
3. **Set up environment variables:**  
   Create a `.env` file in the project root:

   ```env
   DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/mydatabase
   PORT=3000
   ```

   Replace `USER`, `PASSWORD`, and `mydatabase` with your PostgreSQL credentials and database name.

4. **Prisma setup:**
   - Generate the Prisma client:
     ```bash
     yarn prisma generate
     ```
   - Run database migrations:
     ```bash
     yarn prisma migrate dev
     ```

## Running the Project

Start the development server:

```bash
yarn start
```
