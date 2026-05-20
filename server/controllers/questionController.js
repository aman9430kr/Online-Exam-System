const Question = require("../models/Question");

exports.addQuestion = async (req, res) => {
    try {
        const {
            examId,
            questionText,
            options,
            correctAnswer
        } = req.body;

        const question = await Question.create({
            examId,
            questionText,
            options,
            correctAnswer
        });

        res.status(201).json({
            message: "Question Added Successfully",
            question
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getQuestionsByExam = async (req, res) => {
    try {
        const questions = await Question.find({
            examId: req.params.examId
        });

        res.status(200).json(questions);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};