const mongoose=require('mongoose')
const placementSchema = new mongoose.Schema({
    particulars: {
      type: String
    },
    statistics: { // Corrected field name from "statictics" to "statistics"
      type: String
    },
    year: {
      type: Number
    }
  });
const placementModel=mongoose.model("placements",placementSchema) 
module.exports=placementModel