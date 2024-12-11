const express = require('express');
const connectDB = require('../serverside/Config/dbConnection');
const productRoute = require("../serverside/Routes/productRouter")

require('dotenv').config();

connectDB();
const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use('/products',productRoute);


app.listen(PORT, () => console.log(`http://localhost:${PORT}`)); 
