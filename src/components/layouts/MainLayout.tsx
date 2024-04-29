import { FC } from "react";
import { Box } from "@chakra-ui/react";
import images from "@/contansts/images";

const MainLayout = (props: any) => {
  return (
    <Box
      w={"100vw"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      bg={"gray.900"}
      {...props}
    />
  );
};
export default MainLayout;
