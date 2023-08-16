// ApiService.js

// Define the base URL for your API
const BASE_URL = 'http://localhost:5254/';

// Define an asynchronous function to fetch weather forecast data from the API
async function getWeatherForecast(address) {
  // Construct the complete URL for the API endpoint with the provided address
  const response = await fetch(`${BASE_URL}/api/weather?address=${address}`);
  
  // Parse the response body as JSON and return it
  return await response.json();
}

// Export the getWeatherForecast function so it can be used in other modules
export { getWeatherForecast };
