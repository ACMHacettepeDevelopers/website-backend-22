const models = require("../models/users");
const Member = models.Member;

// TODO send response in case of possible exceptions and errors!

const showUnitMembers = async (req, res) => {
    try {
        const { unit } = req.params;
        const members = await Member.find({ unit: unit });
        res.send(members)
    } catch (e) {
        console.log(e);
    }
};


module.exports = {
    showUnitMembers
}
