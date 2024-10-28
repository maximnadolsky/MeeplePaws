import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Configure CORS to allow requests from the frontend
app.use(cors({
  origin: 'http://localhost:3000',  // Allow requests from your React app
  credentials: true                 // Allow cookies and other credentials
}));

// Basic route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Hello from TypeScript server!!! >>>>');
});

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

// Start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});