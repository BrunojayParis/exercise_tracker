const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//Middlewares

app.use(cors());
app.use(express.json());

//connect to DB
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
    ()=>{console.log("connected")});

//Server Listening

app.listen(5000,()=>{
    console.log(`connected to server on port: ${port}`);
});


