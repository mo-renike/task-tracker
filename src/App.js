import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      Text: "Doctors Apointment",
      day: "Jul 12th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      Text: "Tailors Apointment",
      day: "Jul 12th at 5:30pm",
      reminder: true,
    },
    {
      id: 3,
      Text: "Band rehearsals",
      day: "Mar 22th at 12:30am",
      reminder: false,
    },
  ]);

  //add task
  const addTask = (task) =>{

    console.log(task);
  }

  //delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
