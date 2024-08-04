const express = require("express");
 const User = require("../models/user.model")
 const CourseModel = require("../models/course.model")


 const userRouter = express.Router()

userRouter.post('/enroll',async(req,res)=>{
    const {userId,courseId}=req.body;

    try {
        const user = await User.findById(userId)
        const course = await CourseModel.findById(courseId)
         
        if (! user || ! course){
            return
            res.status(404).json({"msg":"user or course not found"});
        }
        if (!user.enrolledCourses.includes(courseId)){
            user.enrolledCourses.push(courseId);
            await user.save()
            res.json({"msg":"enrolled succesfully"})
        }
    } catch (error) {
        
    }
})

userRouter.post('/cancel-enroll',async(req,res)=>{
    const {userId,courseId}=req.body;

    try {
        const user = await User.findById(userId)
        const course = await CourseModel.findById(courseId)
         
        if (! user || ! course){
            return
            res.status(404).json({"msg":"user or course not found"});
        }
        user.enrolledCourses=user.enrolledCourses.filter(course=>course.toString() !==userId);
        await user.save()
        res.json({"msg":"user enrollment cancel"}) 
    } catch (error) {
        
    }
})




 module.exports= userRouter