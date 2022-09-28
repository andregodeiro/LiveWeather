import styled from "styled-components";

export const WeatherApp = styled.div`
  margin-top: 300px;
`;

export const CityInput = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin-top: 250px;
  background-color: rgba(49, 35, 62, 1);
  max-width: 700px;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;

  .city-form {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 0 auto;
    padding: 10px;
  }

  .city-input {
    font-size: 20px;
    border-radius: 10px;
    padding: 5px;
  }
`;

export const Button = styled.button`
  font-size: 15px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export const Waiting = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  max-width: 700px;
  background-color: rgba(49, 35, 62, 1);
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
  color: white;
`;

export const WeatherDataContainer = styled.div`
  border-radius: 0 0 10px 10px;
  padding: 10px;
  margin: 0 auto;
  background: rgb(49, 35, 62);
  background: linear-gradient(
    180deg,
    rgba(49, 35, 62, 1) 5%,
    rgba(2, 0, 36, 1) 91%
  );
  color: white;
  max-width: 700px;
  padding: 10px;
  /* -webkit-box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.75); */
`;

export const CityNameField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 25px;
  text-align: center;
`;

export const CountryFlagField = styled.div`
  display: flex;
  justify-content: center;
`;

export const WeatherInfo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-left: 25px;
`;

export const TemperatureField = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;
  grid-area: 1 / 1 / 3 / 2;
`;

export const CurrTempField = styled.div`
  font-size: 50px;
`;

export const MaxTempField = styled.div`
  font-size: 25px;
`;

export const MinTempField = styled.div`
  font-size: 25px;
`;

export const HumidityContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  margin-left: 3px;

  img {
    width: 25px;
    height: 25px;
  }
`;

export const HumidityField = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  font-size: 27px;
`;

export const ConditionField = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  align-items: center;
  gap: 10px;
`;
