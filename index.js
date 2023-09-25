const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = require('./Router/router');
dotenv.config();
const {PORT,DB} = process.env;
mongoose.connect(DB).then(()=>{
    console.log("Data base connected successfully");
}).catch((err)=>{
    console.log(err);
})
app.use(express.json());
app.use('/api',router);

app.listen(PORT,()=>{
    console.log("server is running on:",PORT);
})