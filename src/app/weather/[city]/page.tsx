/* eslint-disable @next/next/no-async-client-component */
"use client";

import WeatherHeader from "@/components/WeatherHeader";
import { Box } from "@chakra-ui/react";
import WeatherContent from "@/components/WeatherContent";
import WeatherContentLayout from "@/components/layouts/WeatherContentLayout";

import {
  type_thermometer_simple_light,
  type_cloud_rain_light,
  type_wind_light,
  type_drop_light,
  type_sun_dim_light,
} from "@/components/icons";
import WeatherFooter from "@/components/WeatherFooter";
import WeatherFooterLayout from "@/components/layouts/WeatherFooterLayout";
import { useQuery } from "@tanstack/react-query";
import { WeatherService } from "@/services";
import { useParams } from "next/navigation";

const WeatherApp: React.FC = (route) => {
  const params = useParams<{ city: string }>();

  console.log(params.city);

  const { data, isLoading } = useQuery({
    queryKey: ["weather_details"],
    queryFn: () => WeatherService.getWeatherFromCity(params.city),
    staleTime: 0,
  });

  return (
    <Box
      w={"100vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      bgColor={"#13131A"}
      margin={0}
      textColor={"white"}
    >
      <Box
        /*bgColor={"green"}*/ h={"100%"}
        padding={"30px"}
        marginLeft={"auto"}
        marginRight={"auto"}
      >
        <Box padding={"12px"} marginBottom={"16px"} borderRadius={"12px"}>
          <WeatherHeader
            city_name={data?.city_name!}
            country_code={data?.country_code!}
            temp={data?.data[0].temp!}
            max_temp={data?.data[0].max_temp!}
            min_temp={data?.data[0].min_temp!}
            weather={data?.data[0].weather.description?.toLocaleLowerCase()!}
            datetime={data?.data[0].datetime!}
          />
        </Box>

        <Box>
          <WeatherContentLayout>
            <WeatherContent
              content="Thermal Sensation"
              icon_path={type_thermometer_simple_light}
              value={`${data?.data[0].temp!}℃`}
            />
            <WeatherContent
              content="Probability of rain"
              icon_path={type_cloud_rain_light}
              value={`${data?.data[0].pop!}%`}
            />
            <WeatherContent
              content="Wind Speed"
              icon_path={type_wind_light}
              value={`${data?.data[0].wind_spd!} m/s`}
            />
            <WeatherContent
              content="Air humidity"
              icon_path={type_drop_light}
              value={`${data?.data[0].rh!}%`}
            />
            <WeatherContent
              content="UV Index"
              icon_path={type_sun_dim_light}
              value={data?.data[0].uv!}
            />
          </WeatherContentLayout>
        </Box>
        <Box>
          <WeatherFooterLayout>
            {data?.data.map((arr: any, id: any) => (
              <WeatherFooter
                key={id}
                max_temp={arr.max_temp}
                min_temp={arr.min_temp}
                day={arr.datetime}
                weather={arr.weather.description}
              />
            ))}
          </WeatherFooterLayout>
        </Box>
      </Box>
    </Box>
  );
};

export default WeatherApp;
