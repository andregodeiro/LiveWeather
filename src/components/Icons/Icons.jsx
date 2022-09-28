import PropTypes from "prop-types";
import { WeatherIcon, WeatherIconContainer } from "./styles";

export const Icons = ({ icon, condition }) => {
  const iconApi = ` http://openweathermap.org/img/wn/${icon}.png`;
  return (
    <WeatherIconContainer>
      <WeatherIcon src={iconApi} alt={condition} />
    </WeatherIconContainer>
  );
};

Icons.propTypes = {
  icon: PropTypes.string,
  condition: PropTypes.string,
};

export default Icons;
