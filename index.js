const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blog = require('./routes/blogs')

// Access the MongoDB connection string from the environment variable

const connection = async()=>{
    try{
    await  mongoose.connect('mongodb+srv://admin:ayush@cluster0.gmj3ztg.mongodb.net/?retryWrites=true&w=majority');
    console.log("db started");
}
    catch(error){
        console.log(error);
    }
}

connection();

app.use(express.json())

app.get('/', (req, res) => {
    res.send("hello world");
});

app.use("/api/blog",blog);

app.listen(4000, () => {
    console.log("server started");
});
