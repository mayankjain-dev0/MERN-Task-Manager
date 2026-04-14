import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import TaskForm from "./pages/TaskForm";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-task" element={<TaskForm />} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
