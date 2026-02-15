import SideBar from "@/components/Chat/SideBar";
import { Box, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Box w="100%" h="100vh" bg="accentD">
        <Flex flexDir={"row"}>
          <SideBar />
          {children}
        </Flex>
      </Box>
    </>
  );
}
