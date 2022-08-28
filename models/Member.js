const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// add validations later in case of possible errors 

const memberSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },

    last_name: {
        type: String,
        required: true,
    },

    student_id: {
        type: String,
        required: true,
    },

    department: {
        type: String,
        required: true,
    },

    year_of_education: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true
    },

    first_choice_coord: {
        type: String,
        required: true
    },

    second_choice_coord: {
        type: String,
        required: true
    },

    phone_number: {
        type: String,
        required: true
    },

    date_of_birth: {
        type: Date
      },

    password: {
        type: String,
        required: true,
    },

    is_active_member: {
        type: Boolean
      }
});

module.exports = mongoose.model("Member", memberSchema);