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

  //display all data for the weather forcast in here. This is the display section !!!!!!!!!!!
  return (
    <div>
      {weatherData && (
        <div>
          {/* Display the weather forecast data here */}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
