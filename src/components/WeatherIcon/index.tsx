import { Box, Icon } from "@chakra-ui/react";
import React from "react";
import {
  weather_storm_moment_day,
  weather_clear_moment_day,
  weather_cloudy_moment_day,
  weather_few_clouds_moment_day,
  weather_rain_moment_day,
  weather_cloudy_moment_night,
} from "../icons";

// Hava durumu koşullarına göre iconları eşleyen bir fonksiyon
const getWeatherIcon = (
  weatherCondition: string,
  iconWidth: string = "112px",
  iconHeight: string = "112px",
): React.ReactNode => {
  switch (weatherCondition?.toLocaleLowerCase()) {
    case "thunderstorm with light rain":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "thunderstorm with rain":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "thunderstorm with heavy rain":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "thunderstorm with light drizzle":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "thunderstorm with drizzle":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "thunderstorm with heavy drizzle":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "thunderstorm with hail":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "light drizzle":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "drizzle":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "heavy drizzle":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "light rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "moderate rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "heavy rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "freezing rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "light shower rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "shower rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "heavy shower rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "light snow":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "snow":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "heavy snow":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "mix snow/rain":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "sleet":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "heavy sleet":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "snow shower":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "heavy snow shower":
      return <Icon as={weather_rain_moment_day} w={iconWidth} h={iconHeight} />;
    case "flurries":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "mist":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "smoke":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "haze":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "sand/dust":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "fog":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "freezing Fog":
      return (
        <Icon as={weather_storm_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "clear sky":
      return (
        <Icon as={weather_clear_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "few clouds":
      return (
        <Icon as={weather_few_clouds_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "scattered clouds":
      return (
        <Icon as={weather_few_clouds_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "broken clouds":
      return (
        <Icon as={weather_cloudy_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "overcast clouds":
      return (
        <Icon as={weather_cloudy_moment_day} w={iconWidth} h={iconHeight} />
      );
    case "unknown precipitation":
      return (
        <Icon as={weather_cloudy_moment_night} w={iconWidth} h={iconHeight} />
      );
    default:
      return null;
  }
};

// Hava durumu icon bileşeni
const WeatherIcon: React.FC<{
  weatherCondition: string;
  iconWidth: string;
  iconHeight: string;
}> = ({ weatherCondition, iconWidth, iconHeight }) => {
  const icon = getWeatherIcon(weatherCondition, iconWidth, iconHeight); // Hava durumu koşuluna göre iconu al
  return <Box>{icon}</Box>;
};

export default WeatherIcon;
