import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

const WeatherContentLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Box
      bgColor={"#16161F"}
      display={"flex"}
      flexDirection={"column"}
      gap={"8px"}
      padding={"4px 16px"}
      marginBottom={"16px"}
      borderRadius={"12px"}
    >
      {children}
    </Box>
  );
};

export default WeatherContentLayout;
