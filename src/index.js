import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp'; // Provide the correct path
import './index.css'; // Import your styles if needed
import WeatherDisplay from './components/WeatherDisplay'; // Use the correct relative path


//this script tell the HTML what stuff it shoudl be rendering.
ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
    <WeatherDisplay /> {/* Add this line to render the WeatherDisplay component */}
  </React.StrictMode>,
  document.getElementById('root')
);
