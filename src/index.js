import { apiKey } from "./api-key";
import { JSONtoCurrentWeatherClass } from "./currentWeather";
import { JSONtoForecastWeatherClass } from "./forecastWeather";
import { displayCurrentWeather } from "./display";
import { displayForecastWeather } from "./display";
import "./style.css";

let city = "Chicago";
const currentCity = document.querySelector(".current-city");
const cityForm = document.querySelector("#city-form");
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
  city = document.getElementById("city").value;
  currentCity.innerText = city;
  getWeather();
});

async function getWeather() {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const weatherData = await response.json();
    JSONtoCurrentWeatherClass(weatherData.current);
    JSONtoForecastWeatherClass(weatherData.forecast);
    displayCurrentWeather();
    displayForecastWeather();
  } catch (error) {
    alert(`Error! You entered ${city}. Please re-enter the city name`);
  }
}
currentCity.innerText = city;
getWeather();
