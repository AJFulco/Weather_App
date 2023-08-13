import React from 'react';
import './App.css';
import WeatherForecast from './WeatherForecast'; // Import your WeatherForecast component
import AddressForm from './AddressForm'; // Import your AddressForm component

function App() {
  const handleAddressSubmit = (address: string) => {
    // Handle the address submission, e.g., update state or perform other actions
    console.log(`Address submitted: ${address}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Remove the default content */}
        <h1>Weather Forecast App</h1>
        <AddressForm onSubmit={handleAddressSubmit} />
        <WeatherForecast />
      </header>
    </div>
  );
}

export default App;
