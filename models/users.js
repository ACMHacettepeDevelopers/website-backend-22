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

    unit: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    degree: {
        type: String,
        required: true
    },

    activeUser: {
        type: Boolean,
        required: true
    },

    whatsappGroupStatus: {
        type: Boolean,
        required: true
    },

    newsletterSubscription: {
        type: Boolean,
        required: true
    }
});

const memberSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },

    unit: {
        type: String,
        required: true
    },

    is_active_member: {
        type: Boolean
    }
});

// const memberSchema = new mongoose.Schema({
//     first_name: {
//         type: String,
//         required: true,
//     },

//     last_name: {
//         type: String,
//         required: true,
//     },

//     student_id: {
//         type: String,
//         required: true,
//     },

//     department: {
//         type: String,
//         required: true,
//     },

//     year_of_education: {
//         type: String,
//         required: true,
//     },

//     email: {
//         type: String,
//         required: true
//     },

//     first_choice_coord: {
//         type: String,
//         required: true
//     },

//     second_choice_coord: {
//         type: String,
//         required: true
//     },

//     unit: {
//         type: String,
//         required: true
//     },

//     phone_number: {
//         type: String,
//         required: true
//     },

//     date_of_birth: {
//         type: Date
//     },

//     password: {
//         type: String,
//         required: true,
//     },

//     is_active_member: {
//         type: Boolean
//     }
// });

const Admin = mongoose.model("Admin", adminSchema);
const Member = mongoose.model("Member", memberSchema);

module.exports = {
    Admin,
    Member
}
