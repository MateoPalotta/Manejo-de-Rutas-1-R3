import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/App.css';

function TaskDetail() {
  const { id } = useParams();
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const task = tasks.find(t => t.id === parseInt(id));

  return (
    <div className="container">
      <h2>Detalles de la Tarea</h2>
      {task ? (
        <div className="task-detail">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Estado: {task.completed ? "Completa" : "Incompleta"}</p>
          <p>Fecha de Creación: {new Date(task.createdAt).toLocaleString()}</p>
        </div>
      ) : (
        <p>Tarea no encontrada.</p>
      )}
    </div>
  );
}

export default TaskDetail;