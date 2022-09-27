import React, { useEffect, useState } from "react";
import { OpenWeatherApi } from "../../services/weatherapi";
import { Loading } from "../Loading/Loading";
import {
  Button,
  ConditionField,
  CityInput,
  CityNameField,
  CurrTempField,
  HumidityField,
  MaxTempField,
  MinTempField,
  Waiting,
  WeatherDataContainer,
  CountryFlagField,
  TemperatureField,
  WeatherInfo,
} from "./styles";

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
              <Button type="submit">Pesquisar</Button>
            </div>
          </form>
        </div>
      </CityInput>

      {loading ? (
        <Waiting>
          <Loading />
        </Waiting>
      ) : (
        <WeatherDataContainer>
          <CityNameField>
            {weather.name}, {weather.sys.country}
          </CityNameField>

          <CountryFlagField>country flag</CountryFlagField>

          <WeatherInfo>
            <TemperatureField>
              <CurrTempField>{weather.main.temp.toFixed(0)} ºC</CurrTempField>

              <MaxTempField>
                Max: {weather.main.temp_max.toFixed(0)} ºC
              </MaxTempField>

              <MinTempField>
                Min: {weather.main.temp_min.toFixed(0)} ºC
              </MinTempField>
            </TemperatureField>

            <HumidityField>{weather.main.humidity}</HumidityField>

            <ConditionField>
              {weather.weather[0].description.toUpperCase()}
            </ConditionField>
          </WeatherInfo>
        </WeatherDataContainer>
      )}
    </div>
  );
};
