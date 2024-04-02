import { apiKey } from "./api-key";
import { JSONtoCurrentWeatherClass } from "./currentWeather";
import { JSONtoForecastWeatherClass } from "./forecastWeather";
import { displayCurrentWeather } from "./display";
import { displayForecastWeather } from "./display";
import "./style.css";

async function getWeather() {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=Chicago&days=3`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const weatherData = await response.json();
    JSONtoCurrentWeatherClass(weatherData.current);
    JSONtoForecastWeatherClass(weatherData.forecast);
    displayCurrentWeather();
    displayForecastWeather();
  } catch (error) {
    console.log(error);
  }
}

getWeather();
