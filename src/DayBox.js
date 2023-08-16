import React from 'react';
import './WeatherApp.css';


function DayBox({ day, weatherData }) {
    return (
      <div className="day-box">
        <h2>{day}</h2>
        {weatherData ? (
          <>
            <p>Temperature: {weatherData.Temperature}°F</p>
            <img
              src={"https://example.com/weather-graphic-sunny.png"} // Update the actual source
              alt="Weather Graphic"
              className="weather-graphic"
            />
            <p>Chance of Rain: {weatherData.ChanceOfRain}%</p>
          </>
        ) : (
          <div className="placeholder"></div>
        )}
      </div>
    );
  }
  
  export default DayBox;