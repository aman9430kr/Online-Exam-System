const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
{
    examCode: {
        type: String,
        required: true,
        unique: true
    },

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    totalQuestions: {
        type: Number,
        required: true
    },

    totalMarks: {
        type: Number,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Exam", examSchema);