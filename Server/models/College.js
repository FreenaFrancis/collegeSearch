// const mongoose = require('mongoose');

// const CollegeSchema = mongoose.Schema({
//   collegename: {
//     type: String
//   },
//   location: {
//     type: String
//   },
//   contact: {
//     type: Number,
//   },
//   description: {
//     type: String,
//   },
  
//     street: { type: String },
//     city: { type: String },
  
//   image: [{
//     type: String
//   }],
//   course: {
//     type: String
//   },
//   duration: {
//     type: String
//   },
//   fees: {
//     type: Number
//   },
//   eligibility: {
//     type: String
//   }
// });

// const CollegeModel = mongoose.model("College", CollegeSchema);
// module.exports = CollegeModel;

const mongoose = require('mongoose');

const CollegeSchema = mongoose.Schema({
  collegename: String,
  location: String,
  contact: Number,
  description: String,
  street: String,
  city: String,
  image: [String],
  course: [{
    coursename: String,
    duration: String,
    fees: Number,
    eligibility: String
  }],
  duration: String,
  fees: Number,
  eligibility: String
});

const CollegeModel = mongoose.model("College", CollegeSchema);
module.exports = CollegeModel;
