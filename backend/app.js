const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/book-routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use("/books" , router)

mongoose.connect(
    "mongodb+srv://admin:admin123@cluster0.eyyfq.mongodb.net/Book-store?retryWrites=true&w=majority"
).then(()=>console.log("Connnected the database")).then(()=>{
    app.listen(5000);
    console.log("Server is running")
}).catch((err)=> console.log(err));


