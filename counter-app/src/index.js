import React, {createContext, memo} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
export const SomeContext = createContext()

const data = {
  name: 'Anar',
  age: 20
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SomeContext.Provider value={data}>
        <App />
    </SomeContext.Provider>
  </React.StrictMode>
);

