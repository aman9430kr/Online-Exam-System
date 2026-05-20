const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
{
    studentId: {
        type: String,
        required: true
    },

    examId: {
        type: String,
        required: true
    },

    score: {
        type: Number,
        required: true
    },

    totalMarks: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Result", resultSchema);