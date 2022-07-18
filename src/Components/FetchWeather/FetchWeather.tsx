import { useEffect, useState } from "react";
import UserInput from "../UserInput";
import Button from "../Button";
import DisplayWeatherInfo from "../DisplayWeatherInfo";
import { WeatherApi } from "../../interfaces/WeatherApi";

export default function FetchWeather() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherApi>({
    coord: {
      lon: -3.7026,
      lat: 40.4165,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 30.42,
      feels_like: 28.87,
      temp_min: 29.5,
      temp_max: 32.65,
      pressure: 1019,
      humidity: 26,
    },
    visibility: 10000,
    wind: {
      speed: 4.63,
      deg: 50,
    },
    clouds: {
      all: 0,
    },
    dt: 1657874717,
    sys: {
      type: 2,
      id: 2007545,
      country: "ES",
      sunrise: 1657861021,
      sunset: 1657914244,
    },
    timezone: 7200,
    id: 3117735,
    name: "Madrid",
    cod: 200,
  });
  const [city, setCity] = useState("london");
  const [newCity, setNewCity] = useState("london");
  const [input, setInput] = useState("")

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNewCity(e.target.value);
	setInput(e.target.value);
  }

  function onClick(): void {
    setCity(newCity);
	setInput("");
  }

  useEffect(() => {
    async function getAPI() {
      return await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
        .then((response) => response.json())
        .then((data) => setWeatherInfo(data));
    }
    getAPI();
  }, [city]);
  console.log(weatherInfo);

  return (
    <div>
      <UserInput value={input} onChange={onChange}></UserInput>
      <Button onClick={onClick} text="Submit"></Button>
      <DisplayWeatherInfo weatherInfo={weatherInfo} />
    </div>
  );
}
