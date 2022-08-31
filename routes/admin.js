const express = require("express");
const adminController = require("../controllers/admin");
const router = express.Router();

router.get('/:unit/members', adminController.showUnitMembers);

module.exports = router;
