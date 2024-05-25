import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Low');
  const [newTaskDueDate, setNewTaskDueDate] = useState('');

  function handleAddTask() {
    if (!newTaskName.trim()) return;

    const newTask = {
      id: Date.now(),
      name: newTaskName,
      priority: newTaskPriority,
      dueDate: newTaskDueDate
    };

    setTasks([...tasks, newTask]);

    // Reset input fields
    setNewTaskName('');
    setNewTaskPriority('Low');
    setNewTaskDueDate('');
  }

  function handleRemoveTask(index) {
    setTasks(tasks.filter((task, i) => i !== index));
  }

  return (
    <div className="container">
    <h1>Task Management</h1>
    <table>
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Priority</th>
          <th>Due Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>{task.priority}</td>
            <td>{task.dueDate}</td>
            <td>
              <button onClick={() => handleRemoveTask(index)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Enter task name"
      />
      <select value={newTaskPriority} onChange={(e) => setNewTaskPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="date"
        value={newTaskDueDate}
        onChange={(e) => setNewTaskDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  </div>
  );
}

export default App;
