const express = require("express");
const fs = require("fs")


const PORT = 3003;
const server = express();
server.use(express.json())


const timeLogger = (req,res,next)=>{
       //time of req coding
       const reqTime = new Date().getTime();
       next()
       const resTime = new Date().getTime();
        console.log(`The request took ${resTime-reqTime}ms`);
}

server.use(timeLogger)

// server.use(logger)

server.get("/school",(req,res)=>{
   res.send("Welcome to school !!")
})

server.get("/home",(req,res)=>{
  res.send("Welcome to home!!")
})

server.get("/about",(req,res)=>{
    res.send("Welcome to about page!!")
})

server.get("/cart",(req,res)=>{
    res.send("Welcome to cart page!!")
})










server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})





// const gateKeeper=(req,res,next)=>{
//     const id_card = false;
//     if(id_card){
//         next()
//     }else{
//         res.send("You neeed an id card")
//     }
// }

// server.use(gateKeeper)



// const middleware1=(req,res,next)=>{
//     console.log(1)
//     next()
//     console.log(2)
// }

// const middleware2=(req,res,next)=>{
//     console.log(3)
//     next()
//     console.log(4)
// }


// const logger = (req,res,next)=>{
//     console.log(req.method , req.url)
//     const content = `\n The method is ${req.method} and the api endpoint is ${req.url}
//                       and the time is ${Date()}`
//     fs.appendFileSync("./request_logs.txt", content)
//     next()
// }