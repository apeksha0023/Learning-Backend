const http = require("http");

const server = http.createServer((req,res)=>{
     if(req.url === "/home" && req.method === "GET"){ //GET se pata chalta hai ki client want to read the data //bydefault req is "GET"
         res.write("Welcome to home page!!!")
         res.end()
     }else if(req.url === "/cart"){
         res.write("Welcome to cart page!!!!");
         res.end();
     }else if(req.url ==="/user"){
        res.write("User's data!!!!");
        res.end()
     }else{
       res.write("404 page not found");
       res.end()
     }
})


//Que : create an endpoint called "/user" and send response as "users data"



server.listen(8080,()=>{
    console.log("server is running on port 8080")
})