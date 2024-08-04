const express = require("express");
 
const CourseModel = require("../models/course.model");

const courseRouter = express.Router()


courseRouter.get("/courses",async(req,res)=>{
    try {
        const page = parseInt(req.query.page)||1;
        const limit = parseInt(req.query.limit)||10;
        const courseRead = await CourseModel.find().skip((page-1)*limit).limit(limit)
        const totalcourse = await CourseModel.countDocuments();
        const totalPages = Math.ceil(totalcourse/limit);

        res.status(200).json({"msg":"course are",courseRead,totalcourse,currentPage:page}) 
    } catch (error) {
        res.status(404).send(`error coming in ${error}`)
    }
})



module.exports = courseRouter;