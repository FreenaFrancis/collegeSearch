const mongoose = require('mongoose');

const DetailsSchema = mongoose.Schema({
    collegeid: {
        type: String
    },
    userid: {
        type: String
    },
    course: [{
        coursename: {
            type: String,
        },
        duration: {
            type: String
        },
        fees: {
            type: Number
        },
        eligibility: {
            type: String
        }
    }],
    overview:{
        type:String
    }
});

module.exports = mongoose.model("Details", DetailsSchema);
