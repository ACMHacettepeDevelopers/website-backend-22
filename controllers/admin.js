const memberModel = require("../models/member");
const Member = models.Member;

// TODO send response in case of possible exceptions and errors!

const getUnitMembers = async (req, res) => {
    try {
        const { unit } = req.params;
        const members = await Member.find({ unit: unit });
        res.status(200).send(members)
    } catch (e) {
        res.status(500).send(e)
    }
};


module.exports = {
    showUnitMembers
}
