const currentWeatherData = [];

class CurrentWeather {
  constructor(
    condition,
    icon,
    feelslike_c,
    feelslike_f,
    gust_kph,
    gust_mph,
    humidity,
    last_updated,
    precip_in,
    precip_mm,
    temp_c,
    temp_f,
    uv,
    vis_km,
    vis_miles,
    wind_dir,
    wind_kph,
    wind_mph
  ) {
    this.condition = condition;
    this.icon = icon;
    this.feelslike_c = feelslike_c;
    this.feelslike_f = feelslike_f;
    this.gust_kph = gust_kph;
    this.gust_mph = gust_mph;
    this.humidity = humidity;
    this.last_updated = last_updated;
    this.precip_in = precip_in;
    this.precip_mm = precip_mm;
    this.temp_c = temp_c;
    this.temp_f = temp_f;
    this.uv = uv;
    this.vis_km = vis_km;
    this.vis_miles = vis_miles;
    this.wind_dir = wind_dir;
    this.wind_kph = wind_kph;
    this.wind_mph = wind_mph;
  }

  addCurrentWeatherData() {
    currentWeatherData.push(this);
    console.log(`weatherDataArray`);
    console.log(currentWeatherData);
  }
}

function createCurrentWeatherObject(data) {
  const weather = new CurrentWeather(
    data.condition.text,
    data.condition.icon,
    data.feelslike_c,
    data.feelslike_f,
    data.gust_kph,
    data.gust_mph,
    data.humidity,
    data.last_updated,
    data.precip_in,
    data.precip_mm,
    data.temp_c,
    data.temp_f,
    data.uv,
    data.vis_km,
    data.vis_miles,
    data.wind_dir,
    data.wind_kph,
    data.wind_mph
  );
  weather.addCurrentWeatherData();
  console.log("here");
}

function getCurrentWeatherData() {
  console.log(currentWeatherData);
}

function JSONtoCurrentWeatherClass(currentData) {
  createCurrentWeatherObject(currentData);
}

export { JSONtoCurrentWeatherClass };
