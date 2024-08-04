const express = require('express')
const UserModel = require("../model/user.model")
const userRouter = express.Router()

userRouter.post('/register',async (req,res)=>{
    const { name, email, password, age} = req.body;
   try {
        const user = new UserModel({
            name,
            email,
            password,
            age
        })
        await user.save()
    res.status(201).json({
        message:"User registered successfully"
    })
   } catch (error) {
       res.status(500).json({
        message:"Error occured during creation of user"
       })
   }
})

userRouter.post('/login',async(req,res)=>{
    const {email,password}= req.body

    try {
        const user = await UserModel.findOne({email,password})
        if(!user){
            return res.status(400).json({
                message:"Invalid Credential"
            })
        }
     res.status(201).json({
         message:"User logged in successfully"
     })
    } catch (error) {
        res.status(500).json({
         message:"Error occured during login "
        })
    }
 })

 module.exports=userRouter