const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    id:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
    enrolledCourses:{type:mongoose.Schema.Types.ObjectId,ref:'User'}
})

const User = mongoose.model("User",userSchema);

module.exports=User;