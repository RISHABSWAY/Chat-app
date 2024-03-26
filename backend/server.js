import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import adminRoute from './routes/adminRoute.js'
import connectDB from './db/connetDB.js';
import cors from 'cors'

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)
app.use("/api/admin", adminRoute)



app.listen(PORT, ()=> {
connectDB(),
console.log(`Server Running on port ${PORT}`)
})


