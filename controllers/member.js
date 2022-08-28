

const member = require("../models/Member")

const registerMember = async (req, res) => {
    // First Validate The Request
    /*
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    */

    // Check if this user already exisits
    let new_member = await member.Member.findOne({ email: req.body.email });
    if (new_member) {
        return res.status(400).send('Already a member');
    } else {
        // Insert the new user if they do not exist yet
        new_member = new member.Member({

            first_name: req.body.first_name,
            last_name: req.body.last_name,
            student_id: req.body.student_id,
            department: req.body.department,
            year_of_education: req.body.year_of_education,
            email:req.body.email,
            first_choice_coord: req.body.first_choice_coord,
            second_choice_coord: req.body.second_choice_coord,
            phone_number: req.body.phone_number,
            date_of_birth: req.body.date_of_birth,
            password: req.body.password,
            is_active_member: req.body.is_active_member
        });

        await new_member.save();
        res.send(new_member);
    }
};

module.exports = registerMember