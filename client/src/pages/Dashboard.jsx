// import React from "react";

// function Dashboard() {
//   return (
//     <div
//       className="min-h-screen bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
//       }}
//     >
//       <div className="min-h-screen bg-black/50">
//         <div className="bg-blue-700/90 text-white p-5 text-3xl font-bold text-center shadow-lg">
//           Student Dashboard
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
//           <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
//             <h2 className="text-xl font-bold text-gray-700">Available Exams</h2>
//             <p className="text-4xl font-bold text-blue-600 mt-3">12</p>
//           </div>

//           <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
//             <h2 className="text-xl font-bold text-gray-700">Completed Exams</h2>
//             <p className="text-4xl font-bold text-green-600 mt-3">8</p>
//           </div>

//           <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
//             <h2 className="text-xl font-bold text-gray-700">Average Score</h2>
//             <p className="text-4xl font-bold text-purple-600 mt-3">85%</p>
//           </div>
//         </div>

//         <div className="p-8">
//           <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6">
//             <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
//             <p className="text-gray-700 text-lg">
//               You completed DBMS Mock Test and scored 85/100.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


import React from "react";

function Dashboard() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
      }}
    >
      <div className="min-h-screen bg-black/50">
        
        {/* Header */}
        <div className="bg-blue-700/90 text-white p-5 text-3xl font-bold text-center shadow-lg">
          Student Dashboard
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
          
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-gray-700">
              Available Exams
            </h2>
            <p className="text-4xl font-bold text-blue-600 mt-3">
              12
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-gray-700">
              Completed Exams
            </h2>
            <p className="text-4xl font-bold text-green-600 mt-3">
              8
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold text-gray-700">
              Average Score
            </h2>
            <p className="text-4xl font-bold text-purple-600 mt-3">
              85%
            </p>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="p-8">
          <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4">
              Recent Activity
            </h2>
            <p className="text-gray-700 text-lg">
              You completed DBMS Mock Test and scored 85/100.
            </p>
          </div>
        </div>

        {/* AI Assistant Button */}
<div className="p-8 flex justify-center">
  <button
    onClick={() => window.location.href = "/chatbot"}
    className="bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
  >
    Ask AI Assistant 🤖
  </button>
</div>

{/* Exam Timer Button */}
<div className="p-8 flex justify-center">
  <button
    onClick={() => window.location.href = "/exam-timer"}
    className="bg-red-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
  >
    Start Exam Timer ⏰
  </button>
</div>

      </div>
    </div>
  );
}

export default Dashboard;