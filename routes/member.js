const express = require("express");
const router = express.Router();

const memberController = require("../controllers/member");

router.post("/register", memberController);

module.exports = router;