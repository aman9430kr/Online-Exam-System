import React, { useState, useEffect } from "react";

function ExamTimer() {
  const [timeLeft, setTimeLeft] = useState(1800); // 30 min = 1800 sec

  useEffect(() => {
    if (timeLeft === 0) {
      alert("Time Over! Exam Auto Submitted ⏰");
      window.location.href = "/dashboard";
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[500px] text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-6">
          Online Exam Timer ⏰
        </h2>

        <h3 className="text-5xl font-bold text-gray-800 mb-6">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h3>

        <p className="text-lg text-gray-600">
          Complete your exam before time ends.
        </p>
      </div>
    </div>
  );
}

export default ExamTimer;