const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    mobileNumber: {
        type: String,
        required: true
    },

    studentId: {
        type: String,
        required: true
    },

    birthday: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    coordinatorship: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    class: {
        type: String,
        required: true
    }
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = {
    Admin
}
