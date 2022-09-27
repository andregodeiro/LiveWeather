import styled from "styled-components";

export const CityInput = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  border: solid red;

  .city-form {
    display: flex;
    align-items: center;
    gap: 5px;
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
  border: solid green;
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const WeatherDataContainer = styled.div`
  border-radius: 10px;
  padding: 10px;
  margin: 200px auto;
  background-color: #31233e;
  color: white;
  max-width: 700px;
  padding: 10px;
  /* -webkit-box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 35px 1px rgba(0, 0, 0, 0.75); */
`;

export const CityNameField = styled.div`
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

export const HumidityField = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`;

export const ConditionField = styled.div`
  grid-area: 2 / 2 / 3 / 3;
`;
