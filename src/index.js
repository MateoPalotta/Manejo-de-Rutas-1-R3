import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import TaskDetail from './components/TaskDetail';
import CreateTask from './components/CreateTask';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/create" element={<CreateTask />} />
      </Routes>
    </Router>
  </React.StrictMode>
);