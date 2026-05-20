// const Result = require("../models/Result");

// exports.submitResult = async (req, res) => {
//     try {
//         const {
//             studentId,
//             examId,
//             score,
//             totalMarks
//         } = req.body;

//         const result = await Result.create({
//             studentId,
//             examId,
//             score,
//             totalMarks
//         });

//         res.status(201).json({
//             message: "Result Submitted Successfully",
//             result
//         });

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// };

// exports.getStudentResults = async (req, res) => {
//     try {
//         const results = await Result.find({
//             studentId: req.params.studentId
//         });

//         res.status(200).json(results);

//     } catch (error) {
//         res.status(500).json({
//             message: error.message
//         });
//     }
// };



const Result = require("../models/Result");

exports.submitResult = async (req, res) => {
    try {
        const {
            studentId,
            examId,
            score,
            totalMarks
        } = req.body;

        let recommendation = "";

        const percentage = (score / totalMarks) * 100;

        if (percentage >= 80) {
            recommendation = "Excellent performance! You are placement ready. Focus on advanced mock tests and interviews.";
        } 
        else if (percentage >= 60) {
            recommendation = "Good performance. Improve Aptitude and Core Subjects like DBMS, OS, and CN.";
        } 
        else {
            recommendation = "You need strong improvement. Focus on basics, practice mock tests regularly, and revise weak subjects.";
        }

        const result = await Result.create({
            studentId,
            examId,
            score,
            totalMarks
        });

        res.status(201).json({
            message: "Result Submitted Successfully",
            recommendation,
            result
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getStudentResults = async (req, res) => {
    try {
        const results = await Result.find({
            studentId: req.params.studentId
        });

        res.status(200).json(results);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};