
const express = require('express');
const connection = require('./config/db')
const glassRouter =require("./routes/glass.route")

const server = express();
const PORT = 3005;

server.use(express.json())
server.use("/glass",glassRouter)
server.get('/',(req,res)=>{
  res.send('server is running fine')
})




server.listen(PORT, async ()=>{
  try {
   await connection
    console.log(`server is running on port  ${PORT} and connected to database `)
    
  } catch (error) {
    console.log(`error connecting to databases or server ${eror}`);
    
  }
 
})





