// @ts-nocheck
import * as React from "react";


function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Mock API call to fetch weather
const fetchWeather = async () => {
  

  return new Promise((resolve) => {
    setTimeout(() => {
      const temperature = randomIntFromInterval(1, 30);

      resolve({ location: 'San Francisco', temperature: temperature, condition: 'Sunny' });
    }, 3000);
  });
};

export default async function Weather () {
  const weather = await fetchWeather();

  if (!weather) {
    return (
      <h3>No weather</h3>
    );
  }

  return (
    <div className="p-4 bg-red-200 rounded-lg border-2" >
      <h2 className="text-xl font-semibold mb-2">Weather</h2>
      <p>Location: {weather.location}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};
