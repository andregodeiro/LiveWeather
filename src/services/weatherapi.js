const apiKey = "0c5d4813307ea2edd73a81f5c85cf910";

export const OpenWeatherApi = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
  );
  const data = await response.json();

  return data;
};
