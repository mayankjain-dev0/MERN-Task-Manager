import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/tasks", {
        headers: { Authorization: token },
      });
      setTasks(res.data);
    };
    fetchTask();
  }, []);

  return (
    <div>
      <h1>Your Tasks</h1>
      {tasks.map(task => <div key={task._id}>{task.title}</div>)}
    </div>
  );
};

export default Dashboard;