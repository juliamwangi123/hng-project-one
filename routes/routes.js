const express = require("express");
const assignmentController = require("../controller/controller");
const router = express.Router();

router.get("/", assignmentController.index);
router.post("/", assignmentController.operation);

module.exports = router;