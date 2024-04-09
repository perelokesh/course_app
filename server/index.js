import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {userRoutes} from './routes/userRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import { dbConnection } from './config.js';
dotenv.config();

 

const app = express();
const db = dbConnection;
app.use(express.json());
app.use(cors({origin: true}));


app.use("/users", userRoutes);
app.use('/admin', adminRoutes);

app.listen(process.env.Port, () => {
  console.log(`Server running on port ${process.env.Port}`);
})