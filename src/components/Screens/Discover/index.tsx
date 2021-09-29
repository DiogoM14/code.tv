import { VStack } from "@chakra-ui/react";

import { Banners } from "./Banners";
import { MostWatched } from "./MostWatched";

export function Discover() {
  return (
    <VStack
      align="flex-start"
      mt={10}
      w="full"
      spacing={12}
    >
      <Banners />
      <MostWatched />
    </VStack>
  )
}