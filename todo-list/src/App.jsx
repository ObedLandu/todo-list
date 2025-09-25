import { useState } from "react";
import "./App.css";
import Task from "./components/Task/Task";

export default function App() {
  //state pour gerer les taches
  const [tasks, setTasks] = useState([
    { content: "première tâche", isDone: false },
  ]);
  //fonction pour ajouter une tache

  //fonction pour supprimer une tache

  return (
    <div className="App">
      <header>
        <span>TO-DO</span>
      </header>

      <div className="add">
        <form>
          <input type="text" placeholder="Que souhaitez-vous ajouter ?" />
          <button type="submit">Ajouter</button>
        </form>
      </div>
      {/* liste des taches */}
      {tasks.map((task, index) => {
        return <Task key={index} />;
      })}
    </div>
  );
}
