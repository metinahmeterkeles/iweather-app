import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import HomePage from "../components/homePage";
import { ContentLayouts, MainLayout } from "@/components";

export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <ContentLayouts>
          <HomePage />
        </ContentLayouts>
      </MainLayout>
    </ChakraProvider>
  );
}
