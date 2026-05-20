const express = require("express");
const router = express.Router();

const {
    createExam,
    getAllExams
} = require("../controllers/examController");

router.post("/create", createExam);
router.get("/all", getAllExams);

module.exports = router;