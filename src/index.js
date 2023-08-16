import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp'; // Provide the correct path
import './WeatherApp.css'; // Import your styles if needed
import WeatherDisplay from './components/WeatherDisplay'; // Use the correct relative path
import { getWeatherForecast } from './components/ApiService';


//this script tell the HTML what stuff it shoudl be rendering.
ReactDOM.render(
  <React.StrictMode>
    <WeatherApp />
  </React.StrictMode>,
  document.getElementById('root')
);
