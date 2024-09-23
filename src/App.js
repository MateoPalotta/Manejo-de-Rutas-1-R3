import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <Link to="/create" className="button">Crear Nueva Tarea</Link>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id}>
            <Link to={`/task/${task.id}`}>
              {task.title}
            </Link>
            <div>
              <button onClick={() => toggleComplete(task.id)} className="button">
                {task.completed ? 'Marcar Incompleta' : 'Marcar Completa'}
              </button>
              <button onClick={() => deleteTask(task.id)} className="button">
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;