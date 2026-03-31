# MERN Notes App

A full-stack Notes Taking Web Application built using the MERN Stack.  
This application allows users to securely create, read, update, and delete notes with authentication and authorization using JWT and cookies.

---

## Features

- User authentication and authorization  
- JWT-based login system  
- Token stored in HTTP-only cookies for security  
- Create, read, update, and delete notes  
- Responsive and clean user interface  
- Persistent user sessions  

---

## Tech Stack

### Frontend
- React.js  
- CSS / Tailwind CSS  
- Axios / Fetch API  

### Backend
- Node.js  
- Express.js  

### Database
- MongoDB  

### Authentication
- JSON Web Tokens (JWT)  
- Cookies (HTTP-only)  

---

## Folder Structure


notes/
│
├── client/ # React frontend
│
├── server/ # Node.js backend
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│
└── README.md


---

## Installation and Setup

### 1. Clone the repository
git clone https://github.com/TariqueMdHasan/notes.git

cd notes

### 2. Setup Backend
cd server
npm install

Create a `.env` file in the server folder and add:
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Run backend:
cd client
npm install
npm start

---

## Authentication Flow

1. User registers or logs in  
2. Server generates a JWT token  
3. Token is stored in an HTTP-only cookie  
4. Cookie is automatically sent with each request  
5. Protected routes verify the token before access  

---

## Future Improvements

- Add search and filter functionality  
- Add tags or categories for notes  
- Implement rich text editor  
- Deploy application (Vercel, Render, AWS)  
- Add notifications  

---

## Contribution

Contributions are welcome.

1. Fork the repository  
2. Create a new branch  
3. Make your changes  
4. Submit a pull request  

---


