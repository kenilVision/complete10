const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    MobileNumber: { type: Number, required: true },
    Email: { type: String, required: true, unique: true }, 
    Gender: { type: String, required: true },
    Hobbies: { type: [String], required: true },
    filename: { type: String,required: true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
