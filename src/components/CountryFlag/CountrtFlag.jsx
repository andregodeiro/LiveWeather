import React from "react";
import { CountryFlagField, Flag } from "./styles";
import PropTypes from "prop-types";

export const CountryFlag = ({ country }) => {
  const flagApi = `https://countryflagsapi.com/png/${country}`;

  return (
    <div>
      <CountryFlagField>
        <Flag src={flagApi} alt={`Bandeira do ${country}`} />
      </CountryFlagField>
    </div>
  );
};

CountryFlag.propTypes = {
  country: PropTypes.string,
};

export default CountryFlag;
