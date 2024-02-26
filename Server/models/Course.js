const mongoose = require('mongoose')

const courseSchema=mongoose.Schema({
    coursename:{
        type:String
    },
    duration:{
        type:String
    },

    totalfees:{
        type:String
    },
    eligibility:{
        type:String
    }
})

const courseModel=mongoose.model("course",courseSchema)
module.exports=courseModel;