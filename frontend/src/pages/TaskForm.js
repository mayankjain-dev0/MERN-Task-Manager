import axios from "axios";
import React, { useState } from "react";

const TaskForm = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    await axios.post("http://localhost:5000/api/tasks", { title }, { header: { Authorization: token } });
    alert("Task Added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Title" onChange={(e) => setTitle(e.target.value)} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
