import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Chatbot from "./pages/Chatbot";
import CreateExam from "./pages/CreateExam";
import AddQuestion from "./pages/AddQuestion";
import ViewResults from "./pages/ViewResults";
import ExamTimer from "./pages/ExamTimer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/create-exam" element={<CreateExam />} />
        <Route path="/add-question" element={<AddQuestion />} />
        <Route path="/view-results" element={<ViewResults />} />
        <Route path="/exam-timer" element={<ExamTimer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;