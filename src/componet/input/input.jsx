import React, { useContext, useEffect, useState } from "react";
import { WeatherContext } from "../../weather-context/weather-context";
import "./input.styles.scss";
import CurrentTime from "../current-time/current-time.componet";
import Social from "../social/social.componet";

const Input = (props) => {
  const { main, data, city, weather, wind } = props;

  const [inputData, setInputData] = useState("");
  const [filteredCity, setFilteredCity] = useState({});
  const { setCurrentCityWeather } = useContext(WeatherContext);

  useEffect(() => {
    const newFilterCity =
      data &&
      data.filter((city) => {
        return city.city.toLowerCase().includes(inputData);
      });
    setFilteredCity(newFilterCity);
    setCurrentCityWeather(newFilterCity);
  }, [inputData, data]);

  return (
    <div className="weather-contaier">
      <div className="container-city">
        <h3>İstanbul</h3>
        <h3>London</h3>
        <h3>Sydney</h3>
        <h3>Tokyo</h3>
        <h3>Toronto</h3>
        <h3>Paris</h3>
      </div>
      <div className="input-div">
        <input
          type="text"
          onChange={(event) => {
            setInputData(event.target.value.toLowerCase());
          }}
          className="input-text"
          placeholder="Search.."
        />
        <span className="glass-icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </span>
        <span className="location-icon">
          <i className="fa-solid fa-location-dot"></i>
        </span>
      </div>
      <div className="curerent-time-container">
        <CurrentTime></CurrentTime>
      </div>
      <div className="location">
        {inputData === "" ? "Enter The City" : inputData.toUpperCase()}
      </div>
      <div className="info">
        {!weather
          ? "Wait City"
          : weather.map((val) => {
              return <sup key={val.id}>{val.main}</sup>;
            })}
      </div>
      <div className="temp-value">
        <div>
          {!weather ? (
            <img
              src={`https://openweathermap.org/img/wn/10d@2x.png`}
              alt="resim"
            ></img>
          ) : (
            weather.map((val) => {
              return (
                <img
                  key={val.icon}
                  src={`https://openweathermap.org/img/wn/${val.icon}@2x.png`}
                  alt={val.main}
                ></img>
              );
            })
          )}
        </div>
        <div className="temp">
          <h1>
            {main && main.temp ? Math.trunc(main.temp) : "0"}
            <sup>o</sup>
          </h1>
        </div>
        <div className="detais">
          <div className="icon-contaier">
            <i className="fa-solid fa-temperature-three-quarters"></i>
            <span>
              Real fell:{" "}
              {main && main.feels_like ? Math.trunc(main.feels_like) : ""}
            </span>
          </div>
          <div className="icon-contaier">
            <i className="fa-solid fa-droplet"></i>
            <span>
              Humidity: {main && main.humidity ? Math.trunc(main.humidity) : ""}
            </span>
          </div>
          <div className="icon-contaier">
            <i className="fa-solid fa-wind"></i>
            <span>
              Wind fell: {wind && wind.speed ? Math.trunc(wind.speed) : ""}
            </span>
          </div>
        </div>
      </div>
      <Social></Social>
      {/* {data &&
        data.map((city) => {
          return <h2>{city.city}</h2>;
        })} */}
    </div>
  );
};

export default Input;
