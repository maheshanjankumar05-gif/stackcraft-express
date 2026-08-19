# 🚀 StackCraft – Full-Stack Item Management Application

StackCraft is a full-stack web application built using the **MERN stack**. It provides secure user authentication and a protected dashboard where users can create, view, update, and delete items.

The application is deployed online with a **React frontend**, **Node.js/Express backend**, and **MongoDB database**.

## 🌐 Live Demo

**Frontend:**
https://stackcraft-frontend-mahesh.onrender.com

**Backend API:**
https://stackcraft-api-mahesh.onrender.com

**GitHub Repository:**
https://github.com/maheshanjankumar05-gif/stackcraft-express

> Replace the frontend URL above with your exact Render URL if your Render-generated URL is different.

---

## ✨ Features

### 🔐 Authentication

* User registration
* User login
* Password authentication
* JWT-based authentication
* Protected dashboard
* Logout functionality
* Duplicate email validation

### 📦 Item Management

* Create new items
* View user's items
* Edit existing items
* Delete items
* Item categories
* Item descriptions
* Item pricing
* Confirmation before deletion

### 🛡️ Security

* JWT authentication
* Protected API routes
* Password hashing
* Environment variables for sensitive configuration
* `.env` excluded from GitHub
* `node_modules` excluded from GitHub

### 🎨 Frontend

* Responsive React interface
* Login page
* Registration page
* Dashboard
* Add/Edit item form
* Item cards
* Success and error messages
* Responsive layout for desktop and mobile

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router
* Axios
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* CORS
* dotenv

### Deployment & Tools

* Git
* GitHub
* Render
* MongoDB Atlas
* Postman
* Visual Studio Code

---

## 📁 Project Structure

```text
stackcraft-express/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   ├── package.json
│   └── ...
│
├── server/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user          |

### Items

| Method | Endpoint         | Description                    |
| ------ | ---------------- | ------------------------------ |
| GET    | `/api/items`     | Get authenticated user's items |
| POST   | `/api/items`     | Create an item                 |
| PUT    | `/api/items/:id` | Update an item                 |
| DELETE | `/api/items/:id` | Delete an item                 |

Protected item endpoints require:

```text
Authorization: Bearer <JWT_TOKEN>
```

---

## 🔄 Application Flow

```text
User
 │
 ▼
Register
 │
 ▼
Login
 │
 ▼
JWT Token
 │
 ▼
Protected Dashboard
 │
 ├── Add Item
 │
 ├── View Items
 │
 ├── Edit Item
 │
 └── Delete Item
 │
 ▼
Logout
```

---

## 🧪 Testing

The backend APIs were tested using **Postman**.

Verified operations:

* Register → `201 Created`
* Login → `200 OK`
* Get Items → successful
* Create Item → successful
* Update Item → successful
* Delete Item → successful

The live React frontend was also connected to the deployed backend API and tested with JWT authentication.

---

## 🚀 Running Locally

### Clone the repository

```bash
git clone https://github.com/maheshanjankumar05-gif/stackcraft-express.git
cd stackcraft-express
```

### Backend

```bash
cd server
npm install
npm run dev
```

The backend runs locally on:

```text
http://localhost:5000
```

### Frontend

Open another terminal:

```bash
cd client
npm install
npm run dev
```

The React development server will provide the local frontend URL.

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` directory.

Example:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

**Never upload `.env` to GitHub.**

The project `.gitignore` includes:

```text
node_modules/
.env
.env.*
dist/
build/
*.log
```

---

## 📌 Project Highlights

* Full-stack MERN application
* JWT authentication
* Protected routes
* RESTful API
* MongoDB database integration
* Complete CRUD functionality
* Responsive UI
* GitHub version control
* Postman API testing
* Production deployment using Render

---

## 👨‍💻 Author

**Mahesh Anjan Kumar Parvathareddy**

B.Tech – Computer Science Engineering

GitHub:
https://github.com/maheshanjankumar05-gif

---

## ⭐ Future Improvements

* Search and filter items
* Pagination
* User profile management
* Forgot/reset password
* Image upload
* Admin dashboard
* Improved form validation
* Dark mode
* Analytics and statistics

---

## 📄 License

This project is created for educational and portfolio purposes.
