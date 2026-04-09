# 📋 Secure Task Manager (MERN)

A full-stack MERN application that allows users to securely register, log in, and manage personal tasks. Built with **MongoDB, Express.js, React, and Node.js**, featuring **JWT authentication, password hashing, and cloud deployment** on free services.

---

## 🚀 Features
- 🔐 **User Authentication**: Register and login with secure password hashing (bcrypt) and JWT-based authorization.  
- ✅ **Task Management (CRUD)**: Create, read, update, and delete tasks.  
- 👤 **User-Specific Data**: Each user sees only their own tasks.  
- 🛡️ **Security Enhancements**: Helmet middleware, CORS configuration, and JWT protection.  
- 🌍 **Cloud Deployment**: Backend on Render, frontend on Vercel/Netlify, database on MongoDB Atlas.  
- 📱 **Responsive UI**: Clean, mobile-friendly design with React components.  

---

## 🛠️ Tech Stack
- **Frontend:** React, React Router, Axios, Context API  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas (cloud)  
- **Authentication:** JWT, bcrypt  
- **Security:** Helmet, CORS  
- **Deployment:** Render (backend), Vercel/Netlify (frontend), GitHub (repo hosting)  

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mayankjain-dev0/mern-task-manager.git
cd mern-task-manager
```

### 2. Backend Setup
```bash
cd backend
npm install
```
**Create a .env file:**
- MONGO_URI=your_mongodb_atlas_connection_string

- JWT_SECRET=your_secret_key

- PORT=5000

**Run the server:**
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm start
```

## 🌍 Deployment
- **Backend:** Render (free Node.js hosting)
- **Frontend:** Vercel or Netlify
- **Database:** MongoDB Atlas (free cluster)

---

## 📖 Technical Decisions
- **Frameworks:** MERN stack chosen for full-stack demonstration  
- **Styling:** Responsive CSS with React components for lightweight design  
- **State Management:** Context API instead of Redux (simpler, less boilerplate)  
- **Security:** bcrypt for password hashing, JWT for authentication, Helmet for headers  
- **Deployment:** Free tiers prioritized for accessibility; trade-off is limited scalability  

## 📸 Screenshots
(Add screenshots of login page, dashboard, and task management once implemented.)

---

## 📜 License
This project is licensed under the MIT License.

---

## 🤝 Acknowledgments
- MongoDB Atlas for free cloud database hosting  
- Render and Vercel for free deployment services  
- Open-source community for libraries and tools  
