import React, { useState } from "react";
import API from "../services/api";

function AddQuestion() {
  const [formData, setFormData] = useState({
    examId: "",
    questionText: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctAnswer: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddQuestion = async (e) => {
    e.preventDefault();

    try {
      await API.post("/question/add", {
        examId: formData.examId,
        questionText: formData.questionText,
        options: [
          formData.option1,
          formData.option2,
          formData.option3,
          formData.option4,
        ],
        correctAnswer: formData.correctAnswer,
      });

      alert("Question Added Successfully ✅");

      setFormData({
        examId: "",
        questionText: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctAnswer: "",
      });
    } catch (error) {
      alert("Failed to Add Question ❌");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[550px]">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Add Question
        </h2>

        <form onSubmit={handleAddQuestion} className="space-y-4">
          <input
            type="text"
            name="examId"
            placeholder="Exam ID"
            value={formData.examId}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="questionText"
            placeholder="Question"
            value={formData.questionText}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="option1"
            placeholder="Option 1"
            value={formData.option1}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="option2"
            placeholder="Option 2"
            value={formData.option2}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="option3"
            placeholder="Option 3"
            value={formData.option3}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="option4"
            placeholder="Option 4"
            value={formData.option4}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="correctAnswer"
            placeholder="Correct Answer"
            value={formData.correctAnswer}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700"
          >
            Add Question
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddQuestion;