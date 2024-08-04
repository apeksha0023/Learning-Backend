const express = require('express');
const dotenv = require('dotenv').config();
const connection = require('./config/db')
const userRouter =require('./routes/user.route')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/users',userRouter)

app.get("/",(req,res)=>{
    res.send("Hello World")
})

app.listen(PORT, async() => {
try {
    await connection 
    console.log(`Server is running on ${PORT} and db is also connected`)
} catch (error) {
    console.log(`Error connecting`,error);
    
}

})