import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

function CreateTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
      createdAt: new Date(),
    };
    const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    existingTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(existingTasks));
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Crear Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Título" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Descripción" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
        />
        <button type="submit" className="button">Agregar Tarea</button>
      </form>
    </div>
  );
}

export default CreateTask;