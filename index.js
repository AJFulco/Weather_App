import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp'; // Provide the correct path
import './index.css'; // Import your styles if needed

ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById('root')
);
