# 🚀 StackCraft Express

A full-stack MERN application for secure user authentication and item management with complete CRUD operations.

## 📌 Project Overview

**StackCraft Express** is a full-stack web application developed using the MERN stack.

The application allows users to:

- Create an account
- Login securely
- Authenticate using JWT
- Add items
- View their items
- Edit items
- Delete items
- Manage all items through a responsive dashboard

The backend uses **Node.js and Express.js**, while **MongoDB Atlas** is used for database management. The frontend is built using **React and Vite**.

---

## ✨ Features

### 🔐 Authentication

- User registration
- User login
- Password encryption using bcrypt
- JWT-based authentication
- Protected API routes
- Logout functionality

### 📦 Item Management

- Create new items
- View existing items
- Update item details
- Delete items
- User-specific item management

### 🎨 Frontend

- React-based user interface
- Responsive design
- Login and registration pages
- Dashboard
- Navigation bar
- Item cards
- Add/Edit forms
- Error and success messages

### 🗄️ Database

- MongoDB Atlas
- Mongoose ODM
- User model
- Item model

---

## 🛠️ Technologies Used

### Frontend

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS
- dotenv

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Postman
- MongoDB Atlas

---

## 📁 Project Structure

```text
STACKCRAFT-EXPRESS/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── itemRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md