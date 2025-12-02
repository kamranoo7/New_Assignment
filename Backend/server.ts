import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectDB } from './src/config/db';
import userRoutes from './src/routes/userRoutes';
import cors from 'cors';  // No error now after installing @types/cors

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',  // Allow frontend URL
  credentials: true,  // Allow cookies (JWT) to be sent with requests
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
