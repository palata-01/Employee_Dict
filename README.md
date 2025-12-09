# Employee Directory Web Application

A full-stack Employee Directory application built with React, Node.js, Express, and MongoDB.

## 📋 Features

- ✅ View all employees
- ✅ Search employees by name or department (real-time filtering)
- ✅ Add new employees
- ✅ Edit existing employees
- ✅ Delete employees
- ✅ Form validation
- ✅ Responsive UI with TailwindCSS
- ✅ REST API with Express
- ✅ MongoDB database with Mongoose

## 🏗️ Project Structure

```
React_Task/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection setup
│   ├── controllers/
│   │   └── employeeController.js # Business logic for CRUD operations
│   ├── models/
│   │   └── Employee.js           # Mongoose schema
│   ├── routes/
│   │   └── employeeRoutes.js     # Express routes
│   ├── server.js                 # Express server entry point
│   ├── package.json
│   └── .env                      # Environment variables
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── EmployeeList.jsx   # List of employees
    │   │   ├── EmployeeCard.jsx   # Single employee card
    │   │   ├── EmployeeForm.jsx   # Add/Edit form
    │   │   └── SearchBar.jsx      # Search component
    │   ├── services/
    │   │   └── EmployeeService.js # Axios API service
    │   ├── App.jsx                # Main app component
    │   ├── main.jsx               # React entry point
    │   └── index.css              # Tailwind styles
    ├── index.html                 # HTML template
    ├── vite.config.js             # Vite configuration
    ├── tailwind.config.js         # Tailwind configuration
    ├── postcss.config.js          # PostCSS configuration
    └── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (running locally or Atlas connection string)

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure MongoDB in `.env`:
   ```
   MONGODB_URI=mongodb://localhost:27017/employee-directory
   PORT=5000
   NODE_ENV=development
   ```

4. Start the server:
   ```bash
   npm start
   ```
   
   Or for development with auto-reload:
   ```bash
   npm run dev
   ```

   Server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   Frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### GET /api/employees
Fetch all employees (with optional filters)
- Query Parameters:
  - `name`: Search by employee name (case-insensitive)
  - `department`: Search by department (case-insensitive)
- Example: `/api/employees?name=John&department=Engineering`

### GET /api/employees/:id
Fetch a single employee by ID

### POST /api/employees
Create a new employee
- Body:
  ```json
  {
    "name": "John Doe",
    "role": "Software Engineer",
    "department": "Engineering",
    "email": "john@example.com"
  }
  ```

### PUT /api/employees/:id
Update an existing employee
- Body: Same as POST

### DELETE /api/employees/:id
Delete an employee

## 🎨 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Axios** - HTTP client
- **TailwindCSS** - Utility-first CSS framework

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing

## ✨ Features Details

### Search Functionality
- Real-time filtering on the frontend
- Case-insensitive search by name and department
- Works independently and combined

### Form Validation
- Name, Role, Department required fields
- Email validation with regex pattern
- Error messages displayed inline
- Visual feedback for invalid inputs

### User Interface
- Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- Card-based employee display
- Color-coded buttons (Green: Add, Blue: Edit, Red: Delete)
- Loading spinner during data fetching
- Success and error toast messages
- Smooth animations and transitions

## 🔧 Environment Variables

### Backend (.env)
```
MONGODB_URI=mongodb://localhost:27017/employee-directory
PORT=5000
NODE_ENV=development
```

## 📝 Sample Employees

To test the app, you can use curl or Postman to create sample employees:

```bash
curl -X POST http://localhost:5000/api/employees \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "role": "Software Engineer",
    "department": "Engineering",
    "email": "john@example.com"
  }'
```

## 🛠️ Development

### Running both servers simultaneously

1. Open two terminals
2. In terminal 1: Navigate to `backend` and run `npm start`
3. In terminal 2: Navigate to `frontend` and run `npm run dev`

The frontend will automatically open in your browser at `http://localhost:3000`

## 📦 Build for Production

### Frontend
```bash
cd frontend
npm run build
```

Build output will be in `frontend/dist/`

## ⚠️ Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running locally or update `MONGODB_URI` with your Atlas connection string
- Check the connection string format

### CORS Error
- Ensure backend is running on port 5000
- Check that CORS is enabled in `server.js`

### Frontend not connecting to API
- Verify the API_BASE_URL in `EmployeeService.js` matches your backend URL
- Check that backend server is running

## 📄 License

This project is open source and available under the MIT License.
