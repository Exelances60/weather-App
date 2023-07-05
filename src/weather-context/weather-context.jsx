import { createContext, useEffect, useState } from "react";

export const WeatherContext = createContext({
  currentCityWeather: "",
  setCurrentCityWeather: () => {},
  citys: [],
});

export const WeatherProvider = ({ children }) => {
  const [currentCityWeather, setCurrentCityWeather] = useState({});
  const [citys, setCitys] = useState([]);
  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch(
          "https://countriesnow.space/api/v0.1/countries/population/cities"
        );
        const result = await response.json();
        setCitys(result);
      } catch (error) {
        console.error(error);
      }
    };
    getApi();
  }, []);
  const value = { currentCityWeather, setCurrentCityWeather, citys };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
