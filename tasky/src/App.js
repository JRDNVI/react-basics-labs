import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Task from './components/Task'

function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      { id: 1, title: "Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "Web App Assignment", description: "Lab 02", deadline: "Now"},
      { id: 5, title: "Play CS:GO", deadline: "After this lab"}
    ]
  });

  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (
        <Task
          title={task.title}
          description={task.description}
          deadline={task.deadline}
          key={task.id}
        />
      ))}
    </div>
  );
}

export default App;
