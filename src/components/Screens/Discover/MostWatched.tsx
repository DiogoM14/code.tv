import { VStack, Heading, SimpleGrid } from "@chakra-ui/react";
import { Card } from "./Card";

export function MostWatched() {
  return (
    <VStack
      w="full"
      align="flex-start"
      spacing={7}
    >
      <Heading fontWeight="medium" fontSize="2xl">Most Watched</Heading>

      <SimpleGrid columns={[ 1, 2, 3, 4]} gap={5} w="100%">
        <Card />
        <Card />
        <Card />
        <Card />
      </SimpleGrid>
    </VStack>
  )
}