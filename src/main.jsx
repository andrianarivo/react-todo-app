import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/styles/app.css';
import TodoApp from '@/components/TodoApp.jsx';
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <TodoApp />
    </Router>
  </React.StrictMode>
);
