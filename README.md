# ProjectManager API

## Project Description
ProjectManager API is a backend service built with Node.js, Express, and MongoDB that supports user registration, authentication, project management, and task management. It provides RESTful API endpoints to manage users, projects, and tasks efficiently.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT) for authentication
- dotenv for environment variable management

## Features
- User registration and login with JWT authentication
- Secure routes with token verification
- CRUD operations for projects
- CRUD operations for tasks associated with projects
- Token refresh and logout functionality

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and configure the environment variables as described below.

### Running the Application
Start the development server:
```bash
npm run dev
```
The server will start and listen on the configured port.

## API Endpoints Summary

### Project Routes (All routes require JWT authentication)

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| POST   | /addproject       | Create a new project |
| POST   | /deleteproject    | Delete a project     |
| GET    | /getallproject    | Get all projects     |

### Task Routes (All routes require JWT authentication)

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| POST   | /addtask/:id      | Create a new task for project with id |
| GET    | /alltask/:id      | Get all tasks for project with id      |
| POST   | /deletetask/:id   | Delete a task with id                   |
| PUT    | /updatetask/:id   | Update a task with id                   |

### User Routes

| Method | Endpoint          | Description                | Authentication Required |
|--------|-------------------|----------------------------|-------------------------|
| POST   | /register         | Register a new user         | No                      |
| POST   | /login            | User login                 | No                      |
| POST   | /logout           | User logout                | Yes                     |
| POST   | /refresh-token    | Refresh access token       | No                      |
| GET    | /current-user     | Get current logged-in user | Yes                     |

## Folder Structure

```
.
├── .env
├── .gitignore
├── package-lock.json
├── package.json
├── node_modules/
├── public/
└── src/
    ├── app.js
    ├── constant.js
    ├── index.js
    ├── controllers/
    │   ├── project.controller.js
    │   ├── task.controller.js
    │   └── user.controller.js
    ├── db/
    │   └── index.js
    ├── middlewares/
    │   └── auth.middleware.js
    ├── models/
    │   ├── project.models.js
    │   ├── task.model.js
    │   └── user.model.js
    ├── routes/
    │   ├── project.routes.js
    │   ├── task.routes.js
    │   └── user.routes.js
    └── utlis/
        ├── ApiError.js
        ├── ApiResponse.js
        └── asyncHandler.js
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=your_port_number
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=your_frontend_url
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements or bug fixes.

## Contact

For any questions or support, please contact the project maintainer.
