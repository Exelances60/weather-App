import "./App.css";
import { useContext, useEffect, useState } from "react";
import Input from "./componet/input/input";
import { WeatherContext } from "./weather-context/weather-context";

function App() {
  const [cityWeather, setCityWeather] = useState([]);
  const [city, setCity] = useState(false);

  const { citys, currentCityWeather } = useContext(WeatherContext);

  const key = "dc8e86a2245621b7c6b37719ae9e3bab";

  const { main, wind } = cityWeather;
  const { weather } = cityWeather;

  const { data } = citys;

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${
            city || "İstanbul"
          }&appid=${key}&units=metric`
        );
        const responseJson = await response.json();
        setCityWeather(responseJson);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeather();
  }, [city]);

  useEffect(() => {
    const cityWeatherArray = Array.isArray(currentCityWeather)
      ? currentCityWeather
      : [];
    cityWeatherArray.map((city) => {
      setCity(city.city.toLowerCase());
    });
  }, [currentCityWeather]);

  return (
    <div className="App">
      <Input
        main={main}
        data={data}
        city={city}
        weather={weather}
        wind={wind}
      ></Input>
    </div>
  );
}

export default App;
