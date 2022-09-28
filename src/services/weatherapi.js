const apiKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

export const OpenWeatherApi = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  );
  const data = await response.json();

  return data;
};
