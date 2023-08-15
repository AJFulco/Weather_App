// src/App.tsx
import React, { useState } from 'react';
import AddressForm from './components/AddressForm';

const App = () => {
  const [forecastData, setForecastData] = useState<any>(null);

  const fetchWeatherForecast = async (address: string) => {
    try {
      const response = await fetch(`https://localhost:7114/api/weather?address=${address}`);
      if (response.ok) {
        const data = await response.json();
        setForecastData(data);
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle fetch error
    }
  };

  return (
    <div>
      <h1>Weather Forecast App</h1>
      <AddressForm onSubmit={fetchWeatherForecast} />
      {forecastData && (
        <div>
          <p>Latitude: {forecastData.latitude}</p>
          <p>Longitude: {forecastData.longitude}</p>
          {/* Display other forecast data */}
        </div>
      )}
    </div>
  );
};

export default App;
