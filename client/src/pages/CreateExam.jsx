import React, { useState } from "react";
import API from "../services/api";

function CreateExam() {
  const [formData, setFormData] = useState({
    examCode: "",
    title: "",
    description: "",
    totalQuestions: "",
    totalMarks: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateExam = async (e) => {
    e.preventDefault();

    try {
      await API.post("/exam/create", formData);

      alert("Exam Created Successfully ✅");

      setFormData({
        examCode: "",
        title: "",
        description: "",
        totalQuestions: "",
        totalMarks: "",
        duration: "",
      });
    } catch (error) {
      alert("Failed to Create Exam ❌");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[500px]">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Create Exam
        </h2>

        <form onSubmit={handleCreateExam} className="space-y-4">

          {/* Exam Code Input */}
          <input
            type="text"
            name="examCode"
            placeholder="Enter Exam Code (Example: EXAM101)"
            value={formData.examCode}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="title"
            placeholder="Exam Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="text"
            name="description"
            placeholder="Exam Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="number"
            name="totalQuestions"
            placeholder="Total Questions"
            value={formData.totalQuestions}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="number"
            name="totalMarks"
            placeholder="Total Marks"
            value={formData.totalMarks}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="number"
            name="duration"
            placeholder="Duration (Minutes)"
            value={formData.duration}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Create Exam
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateExam;