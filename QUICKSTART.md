# 🚀 Employee Directory - Quick Start Guide

## Prerequisites
- **Node.js** v16+ and **npm** installed
- **MongoDB** running (locally or via MongoDB Atlas)

## ⚡ Quick Setup (5 minutes)

### Step 1: Setup Backend

```powershell
cd backend
npm install
```

Update `.env` if using MongoDB Atlas:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/employee-directory
PORT=5000
```

Start the backend:
```powershell
npm start
```

✅ Backend will be running on `http://localhost:5000`

### Step 2: Setup Frontend (New Terminal)

```powershell
cd frontend
npm install
```

Start the frontend:
```powershell
npm run dev
```

✅ Frontend will open automatically at `http://localhost:3000`

## 📚 API Documentation

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/employees` | Get all employees (with optional ?name= & ?department=) |
| GET | `/api/employees/:id` | Get single employee |
| POST | `/api/employees` | Create new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

## 📝 Employee Schema

```json
{
  "_id": "ObjectId",
  "name": "John Doe",
  "role": "Software Engineer",
  "department": "Engineering",
  "email": "john@example.com",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

## 🧪 Test the API

Using PowerShell (PowerShell 5.1 or Core):

```powershell
# Add an employee
$body = @{
    name = "John Doe"
    role = "Software Engineer"
    department = "Engineering"
    email = "john@example.com"
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:5000/api/employees" `
  -Method POST `
  -Headers @{"Content-Type"="application/json"} `
  -Body $body

# Get all employees
Invoke-WebRequest -Uri "http://localhost:5000/api/employees" -Method GET

# Search by name
Invoke-WebRequest -Uri "http://localhost:5000/api/employees?name=John" -Method GET
```

## 🎯 Core Features

✅ **Add Employees** - Form with validation
✅ **View All** - Grid display with cards
✅ **Search** - Real-time filtering by name or department
✅ **Edit** - Pre-filled form with update functionality
✅ **Delete** - Confirmation dialog before deletion
✅ **Responsive** - Works on desktop, tablet, mobile

## 🔧 Component Breakdown

### Frontend Components
- **App.jsx** - Main app with state management
- **EmployeeList.jsx** - Grid display of employees
- **EmployeeCard.jsx** - Individual employee card with edit/delete
- **EmployeeForm.jsx** - Reusable form for add/edit with validation
- **SearchBar.jsx** - Search inputs for name and department
- **EmployeeService.js** - Axios service for API calls

### Backend Structure
- **server.js** - Express app setup
- **config/db.js** - MongoDB connection
- **models/Employee.js** - Mongoose schema
- **controllers/employeeController.js** - CRUD logic
- **routes/employeeRoutes.js** - API routes

## 📦 Production Build

### Frontend Build
```powershell
cd frontend
npm run build
```

Output: `frontend/dist/` (ready to deploy)

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| MongoDB connection error | Start MongoDB or update MONGODB_URI in .env |
| Port 5000 already in use | Change PORT in backend/.env |
| Port 3000 already in use | Vite will use next available port |
| CORS error | Ensure backend is running and check server.js |
| Can't find modules | Run `npm install` in both backend and frontend |

## 📁 File Locations

```
React_Task/
├── backend/
│   ├── server.js (Main server)
│   ├── config/db.js (Database config)
│   ├── models/Employee.js (Schema)
│   ├── controllers/employeeController.js (Logic)
│   ├── routes/employeeRoutes.js (Routes)
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   └── services/
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

## 🎨 Customization

### Change Port
Edit `backend/.env`: `PORT=5000`
Edit `frontend/vite.config.js`: `port: 3000`

### Change MongoDB URI
Edit `backend/.env`: `MONGODB_URI=...`

### Change API Base URL
Edit `frontend/src/services/EmployeeService.js`: `API_BASE_URL = '...'`

## ✨ That's it!

Your Employee Directory app is ready to use! 🎉
