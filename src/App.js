import { useState } from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
function App() {
  const [showAddTask , setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState (
    [
      {
          id : 1,
          text : 'Study React',
          day : 'Feb 5th at 2:30 pm',
          reminder : true,
      },
      {
          id : 2,
          text : 'Study Algoritm',
          day : 'Feb 6th at 10:30 pm',
          reminder : true,
      },
      {
          id : 3,
          text : 'Study Sass',
          day : 'Dec 12th at 8:30 pm',
          reminder : false,
      },
  ]);

  // Add Task
  const addTask = (task) =>{
    console.log(task);
    const id = Math.floor(Math.random()*10000 +1);
    const newTask = {id,...task}
    setTasks([...tasks,newTask])
  }


  // Delete Task
 const deleteTask = (id) => {
   console.log("delete",id);
   setTasks(tasks.filter((task)=> task.id !== id))
 }

//  Toggle Reminder
const toggleReminder = (id) => {
  console.log(id);
  setTasks(tasks.map((task)=> 
    task.id === id ? {...task,reminder: !task.reminder} : task
  ))
}

  return (
    <div className="container">
      <Header title={"mahdi"} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}

      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>

        ) :
        "No Tasks To Show"
      }
    </div>
  );
}

export default App;
