const Exam = require("../models/Exam");

exports.createExam = async (req, res) => {
    try {
        const {
            examCode,
            title,
            description,
            totalQuestions,
            totalMarks,
            duration
        } = req.body;

        const exam = await Exam.create({
            examCode,
            title,
            description,
            totalQuestions,
            totalMarks,
            duration
        });

        res.status(201).json({
            message: "Exam Created Successfully",
            exam
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getAllExams = async (req, res) => {
    try {
        const exams = await Exam.find();

        res.status(200).json(exams);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};