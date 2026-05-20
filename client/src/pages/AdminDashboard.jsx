import React from "react";

function AdminDashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
      }}
    >
      <div className="min-h-screen bg-black/50">
        
        {/* Header */}
        <div className="bg-green-700/90 text-white p-5 text-3xl font-bold text-center shadow-lg">
          Admin Dashboard
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-gray-700">
              Total Students
            </h2>
            <p className="text-4xl font-bold text-green-600 mt-3">
              150
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-gray-700">
              Total Exams
            </h2>
            <p className="text-4xl font-bold text-blue-600 mt-3">
              20
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-gray-700">
              Results Published
            </h2>
            <p className="text-4xl font-bold text-purple-600 mt-3">
              95
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-8">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Quick Actions
            </h2>

            <div className="flex gap-4 flex-wrap">

              {/* Create Exam Button */}
              <button
                onClick={() => window.location.href = "/create-exam"}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Create Exam
              </button>

              {/* Add Questions Button */}
              <button
                onClick={() => window.location.href = "/add-question"}
                className="bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Add Questions
              </button>

              {/* View Results Button */}
              <button
                onClick={() => window.location.href = "/view-results"}
                className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                View Results
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;