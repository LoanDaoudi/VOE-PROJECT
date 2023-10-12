import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Acceuil from './Component/Global Component/Accueil';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
