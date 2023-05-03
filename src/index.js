import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Test from './Test';
// import Dashboard  from './Dashboard';
import "./styles.css";
import './fonts/Inter/Inter-Medium.ttf';
import './fonts/Inter/Inter-SemiBold.ttf';
import './fonts/Inter/Inter-Bold.ttf';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);