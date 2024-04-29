import { Box, Text } from "@chakra-ui/react";
import images from "@/contansts/images";

import WeatherIcon from "../WeatherIcon";
import Image from "next/image";
import WeatherBackgroundImage from "../WeatherBackgroundImage";

interface MyComponentProps {
  city_name: string;
  country_code: string;
  temp: number;
  max_temp: number;
  min_temp: number;
  weather: string;
  datetime: string;
}

const WeatherHeader: React.FC<MyComponentProps> = ({
  city_name,
  country_code,
  temp,
  max_temp,
  min_temp,
  weather,
  datetime,
}) => {
  return (
    <>
      <Box
        h={"40vh"}
        display={"flex"}
        flexDirection={"column"}
        padding={"12px"}
        position={"relative"}
        overflow={"hidden"}
      >
        <WeatherBackgroundImage weatherCondition={weather} />

        <Box position={"absolute"}>
          <Box>
            <Text
              color={"#FAFAFA"}
              fontSize={"16px"}
              lineHeight={"22.4px"}
              fontWeight={"700"}
            >
              {city_name}, {country_code}
            </Text>
            <Text color={"#FAFAFA"} fontWeight={"400"} fontSize={"16px"}>
              {datetime}
            </Text>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box>
              <Text
                color={"#fff"}
                fontSize={"3rem"}
                fontWeight={"800"}
                lineHeight={"57.6px"}
              >
                {temp} &#x2103;
              </Text>
              <Text
                color={"#fff"}
                fontSize={"1rem"}
                fontWeight={"700"}
                lineHeight={"22.4px"}
              >
                {max_temp}&#x2103; / {min_temp} &#x2103;
              </Text>
              <Text
                color={"#fff"}
                fontSize={"1rem"}
                fontWeight={"400"}
                lineHeight={"19.6px"}
              >
                {weather?.replace(/\b\w/g, (char) => char.toUpperCase())}
              </Text>
            </Box>
            <Box>
              <WeatherIcon
                weatherCondition={weather}
                iconWidth="320px"
                iconHeight="320px"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default WeatherHeader;
