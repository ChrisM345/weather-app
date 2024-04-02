const forecastWeatherData = [];

class ForecastWeather {
  constructor(
    date,
    avghumidity,
    avgtemp_f,
    avgvis_miles,
    condition,
    icon,
    chance_rain,
    chance_snow,
    maxtemp_f,
    maxwind_mph,
    mintemp_f,
    totalprecip_in,
    totalsnow_cm,
    uv
  ) {
    this.date = date;
    this.avghumidity = avghumidity;
    this.avgtemp_f = avgtemp_f;
    this.avgvis_miles = avgvis_miles;
    this.condition = condition;
    this.icon = icon;
    this.chance_rain = chance_rain;
    this.chance_snow = chance_snow;
    this.maxtemp_f = maxtemp_f;
    this.maxwind_mph = maxwind_mph;
    this.mintemp_f = mintemp_f;
    this.totalprecip_in = totalprecip_in;
    this.totalsnow_cm = totalsnow_cm;
    this.uv = uv;
  }

  addForecastWeatherData() {
    forecastWeatherData.push(this);
  }
}

function createForecastWeatherObject(data) {
  const weather = new ForecastWeather(
    data.date,
    data.day.avghumidity,
    data.day.avgtemp_f,
    data.day.avgvis_miles,
    data.day.condition.text,
    data.day.condition.icon,
    data.chance_rain,
    data.chance_snow,
    data.maxtemp_f,
    data.maxwind_mph,
    data.mintemp_f,
    data.totalprecip_in,
    data.totalsnow_cm,
    data.uv
  );
  weather.addForecastWeatherData();
}

function getForecastWeatherData() {
  return forecastWeatherData;
}

function JSONtoForecastWeatherClass(forecastData) {
  for (let i = 0; i < forecastData.forecastday.length; i++) {
    createForecastWeatherObject(forecastData.forecastday[i]);
  }
  //   createForecastWeatherObject(forecastData);
}

export { JSONtoForecastWeatherClass, getForecastWeatherData };
