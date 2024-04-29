import { Box, Icon, Text } from "@chakra-ui/react";
import { type_thermometer_simple_light } from "../icons";

interface MyComponentProps {
  content: string;
  icon_path: React.ElementType;
  value: string;
}

const WeatherContent: React.FC<MyComponentProps> = ({
  content = "Thermal Sensation",
  icon_path = type_thermometer_simple_light,
  value = "26 C",
}) => {
  return (
    <Box
      display={"flex"}
      height={"56px"}
      alignItems={"center"}
      justifyContent={"space-between"}
      padding={"16px 16px"}
      borderBottom={"1px solid #1C1C27"}
      bgColor={"#1C1C27"}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={"12px"}
      >
        <Icon as={icon_path} w={"24px"} h={"24px"} textAlign={"center"} />
        <Text
          color={"#BFBFD4"}
          fontSize={"0.875rem"}
          lineHeight={"19.6px"}
          display={"inline-block"}
          fontWeight={"700"}
        >
          {content}
        </Text>
      </Box>
      <Text
        fontSize={"1rem"}
        fontWeight={"700"}
        lineHeight={"22.4px"}
        color={"#FAFAFA"}
      >
        {value}
      </Text>
    </Box>
  );
};

export default WeatherContent;
