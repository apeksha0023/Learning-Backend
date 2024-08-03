const express = require("express");
const GlassModel = require("../models/glass.model");

const glassRouter = express.Router()





glassRouter.post('/create-glass',async (req,res)=>{
    const {color,material,size,brand}=req.body;
    try {
     const glass = new GlassModel({
          color,
          material,
          size,
          brand
     })
   await glass.save()
   res.status(201).send("glass created successfully")
    } catch (error) {
     res.status(404).send(`error creating glass ${error}`)
    }
 })
 
 
 glassRouter.get("/get-glasses", async(req,res)=>{
     try {
   const glasses = await GlassModel.find()
   res.status(200).json({"msg":"glasses fetched successfully",glasses})
       
     } catch (error) {
       res.status(404).send(`error fetching glass ${error}`)
     }
 })
 
 glassRouter.patch("/update-glass/:id",async(req,res)=>{
   const {id} = req.params;
   try {
     const updatedGlass = await GlassModel.findByIdAndUpdate({_id:id},req.body)
     res.status(200).json({"msg":"msg updated successfully",updatedGlass})
     
   } catch (error) {
     res.status(404).send(`error updatind glass ${error}`)
   }
 })
 
 glassRouter.delete("/delete-glass/:id",async(req,res)=>{
   const {id} = req.params;
   try {
     const updatedGlass = await GlassModel.findByIdAndDelete({_id:id},req.body)
     res.status(200).json({"msg":"msg deleted successfully",updatedGlass})
     
   } catch (error) {
     res.status(404).send(`error deleting glass ${error}`)
   }
 })
 
 module.exports = glassRouter