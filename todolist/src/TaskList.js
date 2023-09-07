import React, { useState, useEffect } from 'react';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from the REST API
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  return (
    <div className="task-list">
      <h2>Task List</h2>
      {tasks.map((task) => (
        <div className="task-card" key={task.id}>
          <h3>{task.title}</h3>
          <p>Task ID: {task.id}</p>
          <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;