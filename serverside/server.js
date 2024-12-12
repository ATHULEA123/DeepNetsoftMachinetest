const express = require('express');
const cors = require('cors'); // Importing the CORS middleware
const connectDB = require('../serverside/Config/dbConnection');
const productRoute = require("../serverside/Routes/productRouter");

require('dotenv').config();

connectDB();
const PORT = process.env.PORT || 5001;
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  app.use(cors(corsOptions));

// Parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/products', productRoute);

// Start server
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));

