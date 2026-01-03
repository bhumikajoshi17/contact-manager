📒 Contact Diary

A full-stack web application that allows users to securely store and manage personal contacts with authentication.

🔍 About the Project

Contact Diary is a MERN stack project where users can sign up, log in, and manage their own contacts.
Each user can only access their own data, which is handled using authentication and backend validation.

This project helped me understand how authentication works, how frontend and backend communicate, and how to handle real backend errors.

✨ Features
🔐 Authentication

1.User signup and login

2.Passwords hashed using bcrypt

3.JWT-based authentication

4.Secure logout

5.Protected routes (only logged-in users can access contacts)

📇 Contact Management

1.Add new contacts (name, phone, email)

2.View personal contacts

3.Update contact details

4.Delete contacts

5.Each contact is linked to the logged-in user

6.Phone number validation (only 10-digit numbers allowed)

🎨 User Interface

Simple and clean UI

Responsive design

Easy navigation

Form validation for better user experience

🛠️ Tech Stack
Frontend

1.React.js

2.React Router

3.Axios

4.CSS / Bootstrap

Backend

1.Node.js

2.Express.js

3.MongoDB

4.Mongoose

5.JWT (JSON Web Token)

6.bcryptjs

## Project Structure
```text

Contact-Manager/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── contactController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Contact.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── contactRoutes.js
│   └── server.js
│
├── frontend/
│   ├── pages/
│   │   ├── Login.js
│   │   └── Contacts.js
│   └── styles/
│       └── main.css
│
└── README.md
```
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

1.POST /api/auth/signup

2.POST /api/auth/login

3.Contacts (Protected)

4.GET /api/contacts

5.POST /api/contacts

6.PUT /api/contacts/:id

7.DELETE /api/contacts/:id

🔒 Security & Validation

1.Password hashing using bcrypt

2.JWT-based authentication

3.Protected backend routes

4.User-specific data access

5.Backend validation for phone number (10 digits only)

6.Proper error handling

Backend: Render
(Environment variables securely configured)

📚 What I Learned

1.How authentication works using JWT

2.How authController handles signup and login

3.How backend identifies users using tokens

4.How to link user data using userId

5.How to debug backend validation errors

6.How frontend and backend communicate

7.How to deploy a full-stack project

👩‍💻 Author

Bhumika Joshi

GitHub: (https://github.com/bhumikajoshi17)

LinkedIn:(https://www.linkedin.com/in/bhumika-joshi-7819882b8/)

