import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import EmployeeContextProvider from './contexts/index'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EmployeeContextProvider>
      <App />
    </EmployeeContextProvider>
  </React.StrictMode>
);

