import React, { useState } from 'react';
import './WeatherApp.css'; // Import your styles if needed
import WeatherDisplay from './components/WeatherDisplay'; // Use the correct relative path
import { getWeatherForecast } from './components/ApiService';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [address, setAddress] = useState('');
  const [error, setError] = useState(null); // New state for error

  const handleFetchData = async () => {
    try {
      const data = await getWeatherForecast(address);
      setWeatherData(data);
      setError(null); // Clear any previous error
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('OH SHIT! Cannot connect to weather server. Please make sure your API is running and try again.'); // Set the error message
    }
  };

  return (
    <div className="WeatherApp">
      <header className="WeatherApp-header">
        <h1>Weather App</h1>
      </header>
      <main className="WeatherApp-main">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="search-bar"
        />
        <button onClick={handleFetchData} className="search-button">
          Fetch Weather
        </button>
        
        {error && <p className="error-message">{error}</p>}
        
        {/* The following part was moved to the DayBox component */}
        <WeatherDisplay weatherData={weatherData} />
      </main>
      
      <body>
      

      </body>

      <footer className="WeatherApp-footer">
        <p>Powered by A Hope and a Prayer!</p>
      </footer>
    </div>
  );
}

export default WeatherApp;
