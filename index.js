const express = require("express");
const connection = require("./config/db")
const courseRouter = require("./routes/course.route")

const server = express();
const PORT = 3001;

server.use(express.json())
server.use("/course",courseRouter)

server.get("/",(req,res)=>{
    console.log("hlw world");
})


server.listen(PORT, async()=>{
    try {
          await connection;
        console.log(`server is running on port ${PORT}`);
    } catch (error) {
        console.log(`error conneting to the server ${error}`)
    }
})