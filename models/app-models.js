const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    "name": {
        type: String,
        required: true
    },

    "mobileNumber": {
        type: String,
        required: true
    },

    "studentId": {
        type: String,
        required: true
    },

    "birthday": {
        type: String,
        required: true
    },

    "email": {
        type: String,
        required: true
    },

    "password": {
        type: String,
        required: true
    },

    "unit": {
        type: String,
        required: true
    },

    "department": {
        type: String,
        required: true
    },

    "degree": {
        type: String,
        required: true
    },

    "activeUser": {
        type: Boolean,
        required: true
    },

    "whatsappGroupStatus": {
        type: Boolean,
        required: true
    },

    "newsletterSubscription": {
        type: Boolean,
        required: true
    }
});

const Admin = mongoose.model("Admin", adminSchema);


module.exports = {
    Admin
}
