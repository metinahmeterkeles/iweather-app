import { FC } from "react";
import { Box } from "@chakra-ui/react";
import background_img from "@/assets/img/background.png";

const ContentLayouts = (props: any) => {
  return (
    <Box
      w={{ base: "100vw", md: "60vw", lg: "50vw", xl: "45vw", "2xl": "50%" }}
      h={"100vh"}
    >
      <Box {...props} />
    </Box>
  );
};
export default ContentLayouts;
