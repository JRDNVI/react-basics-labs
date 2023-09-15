import logo from './logo.svg';
import './App.css';
import Task from './components/Task'

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Empty the Dishwasher"/>
      <Task title="Laundry" deadline="Tomorrow" description="Fold laundry and put away"></Task>
      <Task title="Tidy" deadline="Today" description="" />

    </div>
  );
}

export default App;
