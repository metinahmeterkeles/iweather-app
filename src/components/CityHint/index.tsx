import HintButton from "@/cards/HintButton";
import { Box, Text } from "@chakra-ui/react";

interface MyComponentProps {
  hintData: string[];
}

const CityHint: React.FC<MyComponentProps> = ({ hintData }) => {
  return (
    <Box
      display={"flex"}
      w={"full"}
      flexDirection={"column"}
      overflow={"auto"}
      h={"300px"}
      mt={2}
      borderRadius={8}
      backgroundColor={"#1E1E29"}
    >
      {hintData?.map((data: string, index: number) => {
        return <HintButton data={data} key={index} />;
      })}
    </Box>
  );
};

export default CityHint;
