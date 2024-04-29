import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ChildrenProps {
  children: ReactNode;
}

const WeatherFooterLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <Box display={"flex"} justifyContent={"space-around"}>
      {children}
    </Box>
  );
};

export default WeatherFooterLayout;
