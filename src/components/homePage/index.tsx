"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { Text, Box, Input, List, ListItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { MainLayout, ContentLayouts } from "@/components";
import { CityResponseDto } from "@/models";
import images from "@/contansts/images";
import axios from "axios";
import CityService from "@/services/CityServices";
import CityHint from "../CityHint";

interface CityWeather {
  city: string;
}

interface cityHint {
  country: string;
  cities: string[];
}
[];

const HomePage = () => {
  const [city, setCity] = useState<string>("");
  const [hintData, setHintData] = useState<string[]>();

  const { data } = useQuery({
    queryKey: ["all_city"],
    queryFn: CityService.getAllCities,
  });

  function suggestCities(inputText: string, data: CityResponseDto) {
    const suggestions: string[] = [];

    // Kullanıcının girdiği metni veri setinizdeki her şehirle karşılaştırın
    data.data.forEach((country: cityHint) => {
      country.cities.forEach((city: string) => {
        // Eşleşen şehirleri bulun
        if (city.toLowerCase().includes(inputText.toLowerCase())) {
          suggestions.push(city);
        }
      });
    });

    // Eşleşen şehirleri geri döndürün
    return suggestions;
  }

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const suggestions = suggestCities(inputValue, data!);
    setHintData(suggestions);
    setCity(event.target.value);
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      marginTop={"3rem"}
      flexDirection={"column"}
    >
      <Box display={"flex"} justifyContent={"center"} marginTop={"1.5rem"}>
        <Image src={images.logo_with_text} alt="Logo" width={300} />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        mx={5}
        mt={44}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          marginBottom={".5rem"}
          gap={{ base: 1, md: 4 }}
        >
          <Text
            fontSize={{ base: 20, lg: 24, xl: 28, "2xl": 32 }}
            color={"white"}
          >
            Welcome to
          </Text>
          <Text
            fontSize={{ base: 20, lg: 24, xl: 28, "2xl": 32 }}
            display={"inline-block"}
            color={"product"}
          >
            TypeWeather
          </Text>
        </Box>
        <Text
          color={"gray.200"}
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          marginBottom={"3rem"}
          textAlign={"center"}
        >
          Choose a location to see the weather forecast
        </Text>

        <Input
          value={city}
          onChange={handleChange}
          placeholder="Search location"
          py={{ base: "1.5rem", md: "2rem" }}
          //size={{ base: "sm", md: "lg" }}
          borderRadius={"1rem"}
          bgColor={"#1E1E29"}
          textColor={"white"}
        />

        {city.length > 2 && <CityHint hintData={hintData!} />}
      </Box>
    </Box>
  );
};
export default HomePage;
