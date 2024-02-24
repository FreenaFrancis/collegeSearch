const mongoose=require('mongoose')

const recruitersSchema=mongoose.Schema({
    
    companyname:{
        type:String
    },
    studentsplaced:{
        type:Number
    },
    highestpackage:{
        type:String
    },
    image:{
        type:String
    }
})
const recruitersModel=new mongoose.model("recruiters",recruitersSchema)
module.exports=recruitersModel
