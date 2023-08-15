// ApiService.js

const BASE_URL = 'https://localhost:7114/';

async function getWeatherForecast(address) {
  const response = await fetch(`${BASE_URL}/api/weather?address=${address}`);
  return await response.json();
}

export { getWeatherForecast };
