import axios from "axios";

import { CityResponseDto } from "@/models";

const getAllCities = async (): Promise<CityResponseDto> =>
  await new Promise<CityResponseDto>((resolve, reject) =>
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => resolve(response.data))
      .catch((error) => reject(error)),
  );

const CityService = {
  getAllCities,
};

export default CityService;
