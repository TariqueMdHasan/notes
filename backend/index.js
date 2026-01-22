const express = require('express')
const connectDB = require('./config/db.js')
const dotenv = require('dotenv')
const authRouter = require('./routes/authRoute.js')
const diaryRouter = require('./routes/diaryRoutes.js')
const cookieParser = require('cookie-parser');
const cors = require('cors')

const app = express()
app.use(cookieParser())

dotenv.config()
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,               
  })
);


const PORT = process.env.PORT || 5000 

app.get('/api/health', (req, res)=>{
    res.status(200).json({status: "ok"})
})

app.get('/', (req, res)=> {
    res.send('Hello Tarique')
})

app.use('/api/auth', authRouter)
app.use('/api/diary', diaryRouter)

app.listen(PORT, (req, res)=> {
    console.log(`Backend is runnig successfully on ${PORT}`)
})