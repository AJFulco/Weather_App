import React, { useState, useEffect } from 'react';

interface WeatherForecastData {
  // Define the structure of the forecast data here
}

const WeatherForecast: React.FC = () => {
  const [address, setAddress] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherForecastData | null>(null);

  const fetchWeatherForecast = async () => {
    try {
      const response = await fetch(`/api/weather?address=${encodeURIComponent(address)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch weather forecast');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (address) {
      fetchWeatherForecast();
    }
  }, [address]);

  return (
    <div>
      <h1>Weather Forecast</h1>
      <input
        type="text"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {weatherData && (
        <div>
          {/* Display the weather forecast data here */}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
