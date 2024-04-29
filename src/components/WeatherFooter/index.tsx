import { Box, Text, Icon } from "@chakra-ui/react";

import WeatherIcon from "../WeatherIcon";

interface MyComponentProps {
  day: string;
  weather: string;
  max_temp: string;
  min_temp: string;
}

const WeatherFooter: React.FC<MyComponentProps> = ({
  max_temp = "32ºc",
  min_temp = "26ºc",
  day = "Mon",
  weather,
}) => {
  const date = new Date(day); // Date objesine dönüştür

  // Haftanın günlerini bul
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = date.getDay(); // Belirtilen tarihin haftanın hangi gününe denk geldiğini al
  const dayName = weekDays[dayOfWeek];

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      gap={"2px"}
    >
      <Box>
        <Text
          fontSize={"1rem"}
          lineHeight={"19.6px"}
          fontWeight={"700"}
          color={"#BFBFD4"}
        >
          {dayName}
        </Text>
      </Box>
      <Box>
        <WeatherIcon
          weatherCondition={weather}
          iconWidth="112px"
          iconHeight="112px"
        />
      </Box>
      <Box>
        <Text
          fontSize={"1rem"}
          lineHeight={"19.6px"}
          fontWeight={"700"}
          color={"#FAFAFA"}
        >
          {max_temp}ºc
        </Text>
        <Text
          fontSize={"1rem"}
          lineHeight={"19.6px"}
          fontWeight={"700"}
          color={"#7F7F98"}
        >
          {min_temp}
        </Text>
      </Box>
    </Box>
  );
};

export default WeatherFooter;
