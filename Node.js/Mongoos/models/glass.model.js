const mongoose = require('mongoose')


const glassSchema = mongoose.Schema({
    color:String,
    material:String,
    size: Number,
    brand:{type:String, required:true}
  },{versionKey: false})
       //model for glassSchema
       const GlassModel = mongoose.model("glass",glassSchema) //-->glasses

     module.exports = GlassModel  