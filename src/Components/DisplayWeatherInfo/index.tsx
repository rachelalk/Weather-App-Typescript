import { WeatherApi } from "../../interfaces/WeatherApi";
import CustomizedRating from "../Rating";

interface DisplayWeatherInfoProps {
  weatherInfo: WeatherApi;
}

export default function DisplayWeatherInfo({
  weatherInfo,
}: DisplayWeatherInfoProps) {
  let sunriseSec = weatherInfo.sys.sunrise;
  let sunriseDate = new Date(sunriseSec * 1000);
  let sunrise = sunriseDate.toLocaleTimeString();

  let sunsetSec = weatherInfo.sys.sunset;
  let sunsetDate = new Date(sunsetSec * 1000);
  let sunset = sunsetDate.toLocaleTimeString();

  return (
    <div className="weather-display">
      <div className="weather-info">
        <h2>{weatherInfo.name}</h2>
      </div>
      <div className="weather-info">
        <h3>Current weather:</h3>
        <h4>{weatherInfo.weather[0].main}</h4>
      </div>
      <div className="weather-info">
        <h3>Temperature:</h3>
        <h4>{weatherInfo.main.temp}</h4>
      </div>
      <div className="weather-info">
        <h3>Feels like:</h3>
        <h4>{weatherInfo.main.feels_like}</h4>
      </div>
      <div className="weather-info">
        <h3>Humidity:</h3>
        <h4>{weatherInfo.main.humidity}</h4>
      </div>
      <div className="weather-info">
        <h3>Wind speed:</h3>
        <h4>{weatherInfo.wind.speed}</h4>
      </div>
      <div className="weather-info">
        <h3>Sunrise:</h3>
        <h4>{sunrise}</h4>
      </div>
      <div className="weather-info">
        <h3>Sunset:</h3>
        <h4>{sunset}</h4>
      </div>
      <CustomizedRating></CustomizedRating>
    </div>
  );
}
