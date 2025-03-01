# Assistant AI - Task Manager

## Overview

Assistant AI is an AI-powered task management system that interacts with a MongoDB database using OpenAI's API. It enables CRUD (Create, Read, Update, Delete) operations on tasks dynamically through AI-driven commands.

## Features

- **AI-driven task management**
- **MongoDB integration** for storing and managing tasks
- **Dynamic tool calling** using OpenAI's function calling
- **Supports filtering and sorting** tasks
- **Error handling and logging** for better debugging

## Tech Stack

- **Node.js, Express.js, mongoose & TypeScript** - Backend implementation
- **Next.js, Zustand & Tanstack Query** - Frontend implementation
- **OpenAI SDK** - AI-powered task automation
- **MongoDB** - Database

## Installation & Setup for locally run

1. **Clone the repository**

   ```sh
    git clone https://github.com/mhShohan/ai-task-manager.git
    cd ai-task-manager
   ```

2. **Install dependencies and run server** - add `.env` file (to and environment variables) at root of the `/server` directory as following `default.env`

   ```sh
     cd server

     npm install
     #or
     yarn install

     npm run dev
   ```

3. **Install dependencies and run client** - add `.env` file (to and environment variables) at root of the `/client` directory as following `default.env`

   ```sh
     cd client

     npm install
     #or
     yarn install

     npm run dev
   ```

## Usage

- The AI assistant can be prompted to create, update, retrieve, or delete tasks.
- OpenAI will process the request and trigger the correct MongoDB operation.
- Tasks can be retrieved with optional filters and sorting.

## API Endpoints (if applicable)

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `/assistant`     | Enter your prompt  |
| GET    | `/tasks        ` | Retrieve all tasks |

## Contribution

Feel free to fork this repository and submit a pull request for improvements.

## License

This project is licensed under the MIT License.
