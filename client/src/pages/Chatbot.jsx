import React, { useState } from "react";

function Chatbot() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = () => {
    const lowerQuestion = question.toLowerCase();

    if (lowerQuestion.includes("placement")) {
      setAnswer(
        "For placement preparation, focus on DBMS, Operating System, Computer Networks, OOPs, Aptitude, and Coding Practice. Solve mock tests regularly and improve communication skills for interviews."
      );
    }

    else if (lowerQuestion.includes("dbms")) {
      setAnswer(
        "For DBMS preparation, revise Normalization, Joins, Transactions, SQL Queries, Keys, Indexing, and ACID Properties. Practice SQL queries daily for strong placement preparation."
      );
    }

    else if (lowerQuestion.includes("interview")) {
      setAnswer(
        "For interview preparation, focus on HR questions, technical subjects, coding problems, project explanation, and communication skills. Be confident while explaining your final year project."
      );
    }

    else if (lowerQuestion.includes("aptitude")) {
      setAnswer(
        "For aptitude preparation, practice Quantitative Aptitude, Logical Reasoning, Number Series, Percentages, Profit & Loss, Time & Work, and Puzzle-based questions daily."
      );
    }

    else if (lowerQuestion.includes("resume")) {
      setAnswer(
        "Your resume should include Skills, Projects, Internships, Certifications, and Achievements. Keep your final year project highlighted properly with AI + ML features clearly mentioned."
      );
    }

    else if (lowerQuestion.includes("coding")) {
      setAnswer(
        "For coding rounds, practice Arrays, Strings, Linked List, Stack, Queue, Trees, and basic Dynamic Programming. Start with easy problems and improve consistency daily."
      );
    }

    else if (lowerQuestion.includes("os")) {
      setAnswer(
        "For Operating System preparation, focus on Process Management, Deadlock, CPU Scheduling, Paging, Segmentation, Threads, and Synchronization concepts."
      );
    }

    else if (lowerQuestion.includes("cn")) {
      setAnswer(
        "For Computer Networks preparation, revise OSI Model, TCP/IP, HTTP, DNS, Routing, Switching, IP Addressing, and Network Security basics."
      );
    }

    else {
      setAnswer(
        "Please ask about placement preparation, DBMS, Aptitude, Resume, Coding, Interview Tips, Operating System, or Computer Networks."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[550px]">
        <h2 className="text-3xl font-bold text-center text-purple-600 mb-6">
          AI Placement Assistant 🤖
        </h2>

        <p className="text-gray-600 text-center mb-4">
          Ask about Placement, DBMS, Aptitude, Resume, Coding, Interview,
          Operating System, or Computer Networks
        </p>

        <input
          type="text"
          placeholder="Ask your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full p-3 border rounded-lg outline-none mb-4"
        />

        <button
          onClick={handleAsk}
          className="w-full bg-purple-600 text-white p-3 rounded-lg font-semibold hover:bg-purple-700"
        >
          Ask AI
        </button>

        {answer && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2 text-purple-700">
              AI Suggestion:
            </h3>
            <p className="text-gray-700">{answer}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Chatbot;