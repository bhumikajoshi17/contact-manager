📒 Contact Diary

A full-stack web application that allows users to securely store and manage personal contacts with authentication.

🔍 About the Project

Contact Diary is a MERN stack project where users can sign up, log in, and manage their own contacts.
Each user can only access their own data, which is handled using authentication and backend validation.

This project helped me understand how authentication works, how frontend and backend communicate, and how to handle real backend errors.

🌐 Live Demo:
https://contact-diary-frontend.netlify.app

✨ Features
🔐 Authentication

User signup and login

Passwords hashed using bcrypt

JWT-based authentication

Secure logout

Protected routes (only logged-in users can access contacts)

📇 Contact Management

Add new contacts (name, phone, email)

View personal contacts

Update contact details

Delete contacts

Each contact is linked to the logged-in user

Phone number validation (only 10-digit numbers allowed)

🎨 User Interface

Simple and clean UI

Responsive design

Easy navigation

Form validation for better user experience

🛠️ Tech Stack
Frontend

React.js

React Router

Axios

CSS / Bootstrap

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT (JSON Web Token)

bcryptjs

📁 Project Structure
Contact-Diary/
├── backend/
│   ├── config/
│   │   └── db.js                # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js    # Signup & login logic
│   │   └── contactController.js # Contact CRUD logic
│   ├── middleware/
│   │   └── authMiddleware.js    # JWT verification
│   ├── models/
│   │   ├── User.js              # User schema
│   │   └── Contact.js           # Contact schema
│   ├── routes/
│   │   ├── authRoutes.js        # Auth routes
│   │   └── contactRoutes.js     # Contact routes
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   ├── api.js               # Axios configuration
│   │   └── App.js
│   └── package.json
│
└── README.md

🔐 Authentication Logic

Authentication is handled using a separate authController:

Signup creates a new user with a hashed password

Login verifies credentials and generates a JWT token

The token is sent with requests to identify the logged-in user

Protected routes use middleware to verify the token

🚀 How to Run the Project Locally
Backend Setup
cd backend
npm install
npm start


Create a .env file inside backend:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

Frontend Setup
cd frontend
npm install
npm start


Open in browser:

http://localhost:3000

🔗 API Endpoints
Authentication

POST /api/auth/signup

POST /api/auth/login

Contacts (Protected)

GET /api/contacts

POST /api/contacts

PUT /api/contacts/:id

DELETE /api/contacts/:id

🔒 Security & Validation

Password hashing using bcrypt

JWT-based authentication

Protected backend routes

User-specific data access

Backend validation for phone number (10 digits only)

Proper error handling

🌍 Deployment

Frontend: Netlify
https://contact-diary-frontend.netlify.app

Backend: Render
(Environment variables securely configured)

📚 What I Learned

How authentication works using JWT

How authController handles signup and login

How backend identifies users using tokens

How to link user data using userId

How to debug backend validation errors

How frontend and backend communicate

How to deploy a full-stack project

👩‍💻 Author

Bhumika Joshi

GitHub: (https://github.com/bhumikajoshi17)

LinkedIn:(https://www.linkedin.com/in/bhumika-joshi-7819882b8/)

📝 License

This project is licensed under the MIT License.
