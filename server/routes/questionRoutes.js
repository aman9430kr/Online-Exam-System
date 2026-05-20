const express = require("express");
const router = express.Router();

const {
    addQuestion,
    getQuestionsByExam
} = require("../controllers/questionController");

router.post("/add", addQuestion);
router.get("/:examId", getQuestionsByExam);

module.exports = router;