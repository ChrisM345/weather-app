const forecastWeatherData = [];

class ForecastWeather {
  constructor(
    date,
    avghumidity,
    avgtemp_c,
    avgtemp_f,
    avgvis_km,
    avgvis_miles,
    condition,
    icon,
    chance_rain,
    chance_snow,
    maxtemp_c,
    maxtemp_f,
    maxwind_kph,
    maxwind_mph,
    mintemp_c,
    mintemp_f,
    totalprecip_in,
    totalprecip_mm,
    totalsnow_cm,
    uv
  ) {
    this.date = date;
    this.avghumidity = avghumidity;
    this.avgtemp_c = avgtemp_c;
    this.avgtemp_f = avgtemp_f;
    this.avgvis_km = avgvis_km;
    this.avgvis_miles = avgvis_miles;
    this.condition = condition;
    this.icon = icon;
    this.chance_rain = chance_rain;
    this.chance_snow = chance_snow;
    this.maxtemp_c = maxtemp_c;
    this.maxtemp_f = maxtemp_f;
    this.maxwind_kph = maxwind_kph;
    this.maxwind_mph = maxwind_mph;
    this.mintemp_c = mintemp_c;
    this.mintemp_f = mintemp_f;
    this.totalprecip_in = totalprecip_in;
    this.totalprecip_mm = totalprecip_mm;
    this.totalsnow_cm = totalsnow_cm;
    this.uv = uv;
  }

  addForecastWeatherData() {
    forecastWeatherData.push(this);
    console.log(`forecastWeatherDataArray`);
    console.log(forecastWeatherData);
  }
}

function createForecastWeatherObject(data) {
  const weather = new ForecastWeather(
    data.date,
    data.day.avghumidity,
    data.day.avgtemp_c,
    data.day.avgtemp_f,
    data.day.avgvis_km,
    data.day.avgvis_miles,
    data.day.condition.text,
    data.day.condition.icon,
    data.chance_rain,
    data.chance_snow,
    data.maxtemp_c,
    data.maxtemp_f,
    data.maxwind_kph,
    data.maxwind_mph,
    data.mintemp_c,
    data.mintemp_f,
    data.totalprecip_in,
    data.totalprecip_mm,
    data.totalsnow_cm,
    data.uv
  );
  weather.addForecastWeatherData();
  console.log("here");
}

function getForecastWeatherData() {
  console.log(forecastWeatherData);
}

function JSONtoForecastWeatherClass(forecastData) {
  console.log("FORECAST");
  console.log(forecastData.forecastday[0]);
  for (let i = 0; i < forecastData.forecastday.length; i++) {
    createForecastWeatherObject(forecastData.forecastday[i]);
  }
  //   createForecastWeatherObject(forecastData);
}

export { JSONtoForecastWeatherClass };
