const express = require("express");
 
const CourseModel = require("../models/course.model");

const courseRouter = express.Router()


courseRouter.get("/courses",async(req,res)=>{
    try {
        const courseRead = await CourseModel.find()
        res.status(200).json({"msg":"course are",courseRead}) 
    } catch (error) {
        res.status(404).send(`error coming in ${error}`)
    }
})



module.exports = courseRouter;