const express = require('express');
const cors = require('cors');
require("dotenv").config();
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const dbConnection = require('./config');

const app = express();
const db = dbConnection;
app.use(express.json());
app.use(cors({origin: true}));


app.use("/users", userRoutes);
app.use('/admin', adminRoutes);

app.listen(process.env.Port, () => {
  console.log(`Server running on port ${process.env.Port}`);
})