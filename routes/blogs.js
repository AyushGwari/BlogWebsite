const express = require('express');
const blog = require('../models/BlogsDetails')

const router = express.Router();
router.post("/createblog",async(req,res)=>{
    
    const newBlog = new blog(req.body);
    try{
        const savedBlog = await newBlog.save();
        res.status(200).json(savedBlog);
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get("/getblog",async(req,res)=>{
    try{
    const blogs = await blog.find();
    res.status(200).json(blogs);
}
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;