export default interface CityResponseDto {
  error: boolean;
  msg: string;
  data: [
    {
      country: string;
      cities: string[];
    },
  ];
}
