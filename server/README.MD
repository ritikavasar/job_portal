# Jobkroo - Job Tracker Application

A full-stack MERN job tracking application that helps users manage job applications, track progress, and visualize their job search statistics all in one place.

## 📋 Project Overview

**Jobkroo** lets you:
- Create an account and login securely
- Add, edit, and delete job applications
- View job statistics (total, pending, interviews, rejected)
- Search and filter jobs by status or company
- See visual charts of your job search progress
- Manage your profile and job preferences

## 🛠 Technology Stack

| Layer | Technologies |
|-------|---|
| **Frontend** | React, React Router, Styled Components, Recharts, Axios, Context API |
| **Backend** | Node.js, Express, MongoDB, Mongoose, JWT, Bcryptjs, Helmet, CORS |
| **Database** | MongoDB Atlas (Cloud) |

## 🚀 Quick Start

### 1. Clone Repository
```sh
git clone https://github.com/YOUR-USERNAME/mern-jobportal.git
cd mern-jobportal
```

### 2. Environment Variables
Create `.env` file in the `server` folder:
```
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/jobportal
JWT_SECRET=your_secret_key_here
JWT_LIFETIME=1d
PORT=5000
NODE_ENV=development
```

### 3. Install Dependencies
```sh
npm run install-dependencies
```

### 4. Run Application

**Terminal 1 (Backend):**
```sh
cd server
npm run server
```

**Terminal 2 (Frontend):**
```sh
cd client
npm start
```

Visit: `http://localhost:3000`

---

## 🔗 API Routes

### Authentication Routes
```
POST   /api/v1/auth/register         Register new user account
POST   /api/v1/auth/login            User login with credentials
GET    /api/v1/auth/getCurrentUser   Get current logged-in user info
POST   /api/v1/auth/logout           Logout user
```

### Job Routes (Protected - Requires Auth)
```
GET    /api/v1/jobs                  Get all jobs for current user
POST   /api/v1/jobs                  Create new job entry
PATCH  /api/v1/jobs/:id              Update specific job
DELETE /api/v1/jobs/:id              Delete specific job
```

---

## 📁 Project Structure

```
mern-jobportal/
├── client/                  React frontend application
│   ├── src/
│   │   ├── components/      Reusable UI components
│   │   ├── context/         Global state management
│   │   ├── pages/           Page components
│   │   ├── utils/           Utility functions
│   │   └── assets/          Styles & images
│   └── package.json
│
├── server/                  Node/Express backend
│   ├── controllers/         Route handler logic
│   ├── models/              Mongoose schemas (User, Job)
│   ├── routes/              API endpoints
│   ├── middleware/          Auth & error handling
│   ├── db/                  Database connection
│   ├── errors/              Custom error classes
│   ├── utils/               Helper functions
│   ├── .env                 Environment variables
│   └── package.json
│
└── README.md
```

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **User Authentication** | Secure login/register with JWT tokens |
| **Job Management** | Create, read, update, delete job applications |
| **Real-time Stats** | Total jobs, pending, interviews, rejected counts |
| **Search & Filter** | Find jobs by status, company name, or job type |
| **Data Visualization** | Bar charts and line charts for job trends |
| **User Profile** | Update profile information and preferences |
| **Protected Routes** | Role-based access control for authenticated users |
| **Responsive Design** | Works on desktop and mobile devices |

---

## 🔐 Security Features

- Password hashing with bcryptjs
- JWT authentication for protected routes
- CORS protection
- MongoDB injection prevention
- XSS attack prevention with Helmet
- HTTP-only cookies for tokens

---

## 📊 Database Models

### User Model
```
- name: String
- email: String (unique)
- password: String (hashed)
- createdAt: Date
```

### Job Model
```
- position: String
- company: String
- status: String (pending, interview, declined)
- type: String (full-time, part-time, contract, internship)
- jobLocation: String
- createdBy: ObjectId (User reference)
- createdAt: Date
```

---

## 🎯 Improvements Made

✅ Rebranded from Jobify to Jobkroo  
✅ Enhanced database connection logging  
✅ Optimized API performance  
✅ Improved error handling  
✅ Clean, student-friendly documentation  
✅ Professional README  

---

## 📝 Environment Variables Explained

| Variable | Purpose | Example |
|----------|---------|---------|
| `MONGO_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT_SECRET` | Secret key for JWT signing | `your_secret_key` |
| `JWT_LIFETIME` | Token expiration time | `1d` |
| `PORT` | Server port number | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

---

## 🤝 Project Info

**Author:** Ritik Kumar  
**Created:** 2026  
**License:** ISC  

---

## 📄 Copyright

© 2026 Ritik Kumar. All rights reserved.

---

**Ready to start tracking your job search! 🚀**
