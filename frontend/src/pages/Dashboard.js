import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTask = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/tasks`, {
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
