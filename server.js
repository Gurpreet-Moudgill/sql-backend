const express = require('express');
const dotenv = require('dotenv').config();
// import * as express from 'express'
const cors = require('cors');
const app = express();

// var hostt = {
//   origin: "https://192.168.29.36:8081",
// };

app.use(cors(
    
));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const router = require("./routes/dbRoutes");
app.use("/products", router);

app.get('/', (req, res)=>{
    res.json({message:"hello"})
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);

});
