const express = require("express");
const router = express.Router();

const memberController = require("../controllers/member");

router.post("/member-registration", memberController.registerMember);

module.exports = router;