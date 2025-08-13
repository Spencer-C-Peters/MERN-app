import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { VideogameContextProvider } from './context/VideogameContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <VideogameContextProvider>
      <App />
    </VideogameContextProvider>
  </React.StrictMode>
);
