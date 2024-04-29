import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface MyComponentProps {
  data: string;
}

const HintButton: React.FC<MyComponentProps> = ({ data }) => {
  const param = data.toLocaleLowerCase().replace(" ", "");

  return (
    <Link href={`/weather/${param}`} style={{ width: "100%" }}>
      <Button
        backgroundColor={"gray.500"}
        w={"100%"}
        h={"50px"}
        my={0.5}
        py={4}
        px={5}
        color={"white"}
      >
        {data}
      </Button>
    </Link>
  );
};

export default HintButton;
