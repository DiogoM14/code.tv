import { VStack, Heading, SimpleGrid, GridItem, Box } from "@chakra-ui/react";

export function Banners() {
  return (
    <VStack
      w="full"
      align="flex-start"
      spacing={7}
    >
      <Heading fontSize="3xl" fontWeight="semibold">Discover</Heading>

      <SimpleGrid w="100%" columns={3} columnGap={5}>
        <GridItem colSpan={2}>
          <Box borderRadius="18px" w="100%" h="366px" backgroundColor="#30acbd" />
        </GridItem>
        <GridItem colSpan={1}>
          <Box borderRadius="18px" w="100%" h="366px" backgroundColor="#cb7e55" />
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}