const express = require("express");
const fs = require("fs")


const server = express();
const PORT= 4040;

server.use(express.json())

server.get("/home",(req,res)=>{
    res.send("Welcome to home page!!")
})

server.get("/user-data",(req,res)=>{
   const data = fs.readFileSync("./db.json","utf-8")
   res.send(data)
})



server.post("/add-data", (req,res)=>{
    let incomingData = req.body
    console.log("incoming",incomingData)
    const userData = fs.readFileSync("./db.json","utf-8")
    console.log("userdata",userData)
    const parsedData = JSON.parse(userData)
    console.log("parsedData",parsedData)
    parsedData.data.push(incomingData)       //....parsed data has both data old & new
    console.log("old+newdata",parsedData)
   
    fs.writeFileSync("./db.json",JSON.stringify(parsedData))
     res.send(`Data recieved successfully ${parsedData}`)
})

server.listen(4040,()=>{
    console.log(`Server is running on port ${PORT}`)
})