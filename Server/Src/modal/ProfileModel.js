const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    MobileNumber: { type: Number, required: true },
    Email: { type: String, required: true, unique: true }, 
    Password: { type: String, required: true },
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
