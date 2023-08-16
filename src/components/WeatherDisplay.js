// WeatherDisplay.js

//Display the weather results. 
import React, { useState } from 'react';
import { getWeatherForecast } from './ApiService';

function WeatherDisplay() {
  const [weatherData, setWeatherData] = useState(null);
  const [address, setAddress] = useState('');

  const handleFetchData = async () => {
    try {
      const data = await getWeatherForecast(address);
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      {weatherData && (
        <div>
          <h2>Weather Results</h2>
          <p>Latitude: {weatherData.Latitude}</p>
          <p>Longitude: {weatherData.Longitude}</p>
          <p>Temperature: {weatherData.Temperature}</p>
          {getWeatherForecast}
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
