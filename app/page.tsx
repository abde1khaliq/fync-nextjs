"use client";
import { Text, Button } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <Text fontFamily="inter" color="accent">
        This should be Inter font and accent color
      </Text>
      <Text fontFamily="allura" color="danger">
        This should be Allura font and danger color
      </Text>
      <Button bg="accent">Test Button</Button>
    </>
  );
}
