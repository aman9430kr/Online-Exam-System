import React, { useState } from "react";
import API from "../services/api";

function ViewResults() {
  const [studentId, setStudentId] = useState("");
  const [results, setResults] = useState([]);

  const handleViewResults = async () => {
    try {
      const res = await API.get(`/result/${studentId}`);
      setResults(res.data);
    } catch (error) {
      alert("Failed to Fetch Results ❌");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          View Student Results
        </h2>

        <input
          type="text"
          placeholder="Enter Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="w-full p-3 border rounded-lg mb-4"
        />

        <button
          onClick={handleViewResults}
          className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700"
        >
          View Results
        </button>

        <div className="mt-6 space-y-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow"
            >
              <p><strong>Exam ID:</strong> {result.examId}</p>
              <p><strong>Score:</strong> {result.score}</p>
              <p><strong>Total Marks:</strong> {result.totalMarks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewResults;