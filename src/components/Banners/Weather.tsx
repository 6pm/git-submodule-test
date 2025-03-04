// @ts-nocheck
import * as React from "react";

// Mock API call to fetch weather
const fetchWeather = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ location: 'San Francisco', temperature: 22, condition: 'Sunny' });
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
    <div className="p-4 bg-blue-200 rounded-lg">
      <h2 className="text-xl font-semibold mb-2">Weather</h2>
      <p>Location: {weather.location}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
};
