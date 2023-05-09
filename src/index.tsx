import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'views/App';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
