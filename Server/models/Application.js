const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    username: { type: String },
    email: { type: String },
    address: { type: String },
    city: { type: String },
    contact: { type: String },
    highestqualification: { type: String },
    percentage: { type: String },
    course: { type: String },
});

const ApplicationModel = mongoose.model("Application", applicationSchema);

module.exports = ApplicationModel;
