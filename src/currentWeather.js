const currentWeatherData = [];

class CurrentWeather {
  constructor(condition, icon, feelslike_f, gust_mph, humidity, last_updated, precip_in, temp_f, uv, vis_miles, wind_dir, wind_mph) {
    this.condition = condition;
    this.icon = icon;
    this.feelslike_f = feelslike_f;
    this.gust_mph = gust_mph;
    this.humidity = humidity;
    this.last_updated = last_updated;
    this.precip_in = precip_in;
    this.temp_f = temp_f;
    this.uv = uv;
    this.vis_miles = vis_miles;
    this.wind_dir = wind_dir;
    this.wind_mph = wind_mph;
  }

  addCurrentWeatherData() {
    currentWeatherData.push(this);
  }
}

function createCurrentWeatherObject(data) {
  const weather = new CurrentWeather(
    data.condition.text,
    data.condition.icon,
    data.feelslike_f,
    data.gust_mph,
    data.humidity,
    data.last_updated,
    data.precip_in,
    data.temp_f,
    data.uv,
    data.vis_miles,
    data.wind_dir,
    data.wind_mph
  );
  weather.addCurrentWeatherData();
}

function getCurrentWeatherData() {
  return currentWeatherData;
}

function JSONtoCurrentWeatherClass(currentData) {
  currentWeatherData.length = 0;
  createCurrentWeatherObject(currentData);
}

export { JSONtoCurrentWeatherClass, getCurrentWeatherData };
