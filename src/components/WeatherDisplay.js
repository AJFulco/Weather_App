// WeatherDisplay.js

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
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleFetchData}>Fetch Weather</button>

      {weatherData && (
        <div>
          <h2>Your Mom's A$$</h2>
          <p>Latitude: {weatherData.Latitude}</p>
          <p>Longitude: {weatherData.Longitude}</p>
          <p>Temperature: {weatherData.Temperature}</p>
          {/* Display other weather data properties here */}
        </div>
      )}
    </div>
  );
}

export default WeatherDisplay;
