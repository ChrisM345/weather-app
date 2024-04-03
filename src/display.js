import { getCurrentWeatherData } from "./currentWeather";
import { getForecastWeatherData } from "./forecastWeather";

const currentWeatherDiv = document.querySelector(".current");
const forecastWeatherDiv = document.querySelector(".forecast");

function displayCurrentWeather() {
  currentWeatherDiv.innerHTML = "";
  const data = getCurrentWeatherData()[0];
  const temp = `Current Temp ${data.temp_f}\u00B0F`;
  const date = data.last_updated.split(" ")[0];
  const condition = data.condition;
  const icon = data.icon;
  // const precip_in = data.precip_in;

  const wind_dir = data.wind_dir;
  const wind_mph = data.wind_mph;

  const tempLine = document.createElement("p");
  tempLine.className = "current-temp";
  tempLine.innerText = temp;

  const dateLine = document.createElement("p");
  dateLine.className = "current-date";
  dateLine.innerText = date;

  const conditionLine = document.createElement("p");
  conditionLine.className = "current-condition";
  conditionLine.innerText = condition;
  const iconImage = document.createElement("img");
  iconImage.src = icon;

  const descriptionLine = document.createElement("p");
  descriptionLine.className = "current-descrition";
  descriptionLine.innerText = `Wind ${wind_dir} at ${wind_mph} mph.`;

  currentWeatherDiv.append(tempLine);
  currentWeatherDiv.append(dateLine);
  currentWeatherDiv.append(conditionLine);
  currentWeatherDiv.append(iconImage);
  currentWeatherDiv.append(descriptionLine);

  const detailDiv = document.createElement("div");
  detailDiv.className = "current-details";

  const feelsLike = data.feelslike_f;
  const humidity = data.humidity;
  const uv = data.uv;
  const visibility = data.vis_miles;

  const feelsLikeSection = document.createElement("p");
  feelsLikeSection.innerText = `Feels like\n${feelsLike}\u00B0F`;
  const humiditySection = document.createElement("p");
  humiditySection.innerText = `Humidity\n${humidity}`;
  const uvSection = document.createElement("p");
  uvSection.innerText = `UV index\n${uv}`;
  const visibilitySection = document.createElement("p");
  visibilitySection.innerText = `Visibility\n${visibility} miles`;

  detailDiv.append(feelsLikeSection);
  detailDiv.append(humiditySection);
  detailDiv.append(uvSection);
  detailDiv.append(visibilitySection);
  currentWeatherDiv.append(detailDiv);
}

function displayForecastWeather() {
  forecastWeatherDiv.innerHTML = "";
  const data = getForecastWeatherData();
  data.forEach((weatherData) => {
    const dayDataDiv = document.createElement("div");
    dayDataDiv.className = "forecast-day";
    const date = weatherData.date;
    const avghumidity = weatherData.avghumidity;
    const avgtemp_f = weatherData.avgtemp_f;
    const avgvis_miles = weatherData.avgvis_miles;
    const condition = weatherData.condition;
    const icon = weatherData.icon;

    const tempLine = document.createElement("p");
    tempLine.className = "forecast-temp";
    tempLine.innerText = `Average Temp: ${avgtemp_f}`;

    const dateLine = document.createElement("p");
    dateLine.className = "forecast-date";
    dateLine.innerText = date;

    const conditionLine = document.createElement("p");
    conditionLine.className = "forecast-condition";
    conditionLine.innerText = condition;
    const iconImage = document.createElement("img");
    iconImage.src = icon;

    dayDataDiv.append(tempLine);
    dayDataDiv.append(dateLine);
    dayDataDiv.append(conditionLine);
    dayDataDiv.append(iconImage);

    const detailDiv = document.createElement("div");
    detailDiv.className = "forecast-details";

    const humiditySection = document.createElement("p");
    humiditySection.innerText = `Humidity: ${avghumidity}`;
    const visibilitySection = document.createElement("p");
    visibilitySection.innerText = `Visibility: ${avgvis_miles} miles`;

    detailDiv.append(humiditySection);
    detailDiv.append(visibilitySection);
    dayDataDiv.append(detailDiv);

    forecastWeatherDiv.append(dayDataDiv);
  });
}

export { displayCurrentWeather, displayForecastWeather };
