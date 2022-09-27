import React, { useEffect, useState } from "react";
import { OpenWeatherApi } from "../../services/weatherapi";
import { CityInput } from "./styles";

export const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(false);
    console.log(city);
  };

  useEffect(() => {
    (async () => {
      const cityWeather = await OpenWeatherApi(city);
      setWeather(cityWeather);
      console.log(cityWeather);
      if (city.length >= 1) {
        setLoading(false);
      }
      setLoading(true);
    })();
  }, [city]);

  return (
    <div className="weather-page">
      <CityInput>
        <div className="city-name-box">
          <form onSubmit={handleSubmit} className="city-form">
            <div>
              <input
                type="text"
                placeholder="Insira a sua cidade"
                className="city-input"
                value={city}
                onChange={(event) => setCity(event.target.value)}
              />
            </div>
            <div>
              <button className="form-btn" type="submit">
                Pesquisar
              </button>
            </div>
          </form>
        </div>
      </CityInput>

      {loading ? (
        <div>Aguardando...</div>
      ) : (
        <div className="weather-container">
          <div className="city-name">
            {weather.name}, {weather.sys.country}
          </div>
          <div className="country-flag">country flag</div>
          <div className="curr-temp"> {weather.main.temp.toFixed(0)} ºC</div>
          <div className="max-temp">{weather.main.temp_max.toFixed(0)} ºC</div>
          <div className="min-temp">{weather.main.temp_min.toFixed(0)} ºC</div>
          <div className="humidity">{weather.main.humidity}</div>
          <div className="conditions">
            {weather.weather[0].description.toUpperCase()}
          </div>
        </div>
      )}
    </div>
  );
};
