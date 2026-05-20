const express = require("express");
const router = express.Router();

const {
    submitResult,
    getStudentResults
} = require("../controllers/resultController");

router.post("/submit", submitResult);
router.get("/:studentId", getStudentResults);

module.exports = router;