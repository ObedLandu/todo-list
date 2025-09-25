import { useEffect, useRef, useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";

export default function App() {
  //state pour gerer les taches
  const [tasks, setTasks] = useState([
    { content: "première tâche", isDone: false },
  ]);
  //Ref
  const input = useRef("");

  //cycle
  useEffect(() => {
    input.current.focus();
  });

  //fonctions
  const submittedHandler = (e) => {
    e.preventDefault();
    console.log(input.current.value);
    const newTask = {
      content: input.current.value,
      isDone: false,
    };
    setTasks([newTask, ...tasks]);
    input.current.value = "";
  };

  const isDoneCliquedHandler = (index) => {
    console.log("click");
    const newTasks = [...tasks];
    newTasks[index].isDone = !tasks[index].isDone;
    setTasks(newTasks);
  };

  const isDeleteCliquedHandler = (index) => {
    console.log("delete");
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <header>
        <span>TO-DO</span>
      </header>

      <div className="add">
        <form onSubmit={(e) => submittedHandler(e)}>
          <input
            type="text"
            placeholder="Que souhaitez-vous ajouter ?"
            ref={input}
          />
          <button type="submit">Ajouter</button>
        </form>
      </div>
      {/* liste des taches */}
      {tasks.map((task, index) => {
        return (
          <Task
            key={index}
            content={task.content}
            isDone={task.isDone}
            doneCliqued={() => isDoneCliquedHandler(index)}
            deleteCliqued={() => isDeleteCliquedHandler(index)}
          />
        );
      })}
    </div>
  );
}
