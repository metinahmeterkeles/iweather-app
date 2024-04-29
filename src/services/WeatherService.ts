import axios from "axios";

import { WeatherRequestDto, WeatherResponseDto } from "@/models";

const getWeatherFromCity = async (city: string): Promise<WeatherResponseDto> =>
  await new Promise<WeatherResponseDto>((resolve, reject) =>
    axios
      .get(
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=5&key=fa0a6530f101406b9477b811acc9ad6c`,
        {},
      )
      .then((response) => resolve(response.data))
      .catch((error) => reject(error)),
  );

const WeatherService = {
  getWeatherFromCity,
};

export default WeatherService;
