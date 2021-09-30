import { VStack, Heading, SimpleGrid, GridItem, Box, Text, HStack } from "@chakra-ui/react";
import { VerifiedAvatar } from "../../VerifiedAvatar";

export function Banners() {
  return (
    <VStack
      w="full"
      align="flex-start"
      spacing={7}
    >
      <Heading fontSize="3xl" fontWeight="semibold">Discover</Heading>

      <SimpleGrid w="100%" columns={3} gap={5}>
        <GridItem colSpan={[3, 3, 2, 2]}>
          <Box 
            borderRadius="18px" 
            w="100%" 
            h="366px" 
            backgroundColor="#30acbd" 
            p={10}
            pos="relative"
          >
            <Heading 
              maxW="240px" 
              w="100%"
              fontWeight="semibold"
              fontSize="3xl"
            >
              Complete ReactJS w/ NextJS course 2021 Updated.
            </Heading>

            <HStack mt={8} spacing={3}>
              <Box
                p={1}
                borderRadius="100%"
                borderWidth="1px"
              >
                <VerifiedAvatar />
              </Box>

              <VStack align="flex-start" spacing={0.5}>
                <Text fontWeight="medium" fontSize="sm">Diogo Martins</Text>
                <Text fontSize="xs">53K views  •  2 weeks ago</Text>
              </VStack>
            </HStack>
          </ Box>
        </GridItem>
        <GridItem colSpan={[3, 3, 1, 1]}>
        <Box 
            borderRadius="18px" 
            w="100%" 
            h="366px" 
            backgroundColor="#cb7e55" 
            p={10}
            pos="relative"
          >
            <Heading 
              maxW="240px" 
              w="100%"
              fontWeight="semibold"
              fontSize="3xl"
            >
              Firsts steps with CSS Display Grid.
            </Heading>

            <VStack mt={4} spacing={3} align="flex-start">
              <VStack align="flex-start" spacing={0.5}>
                <Text fontWeight="medium" fontSize="sm">Diogo Martins</Text>
                <Text fontSize="xs">53K views  •  2 weeks ago</Text>
              </VStack>

              <Box
                p={1}
                borderRadius="100%"
                borderWidth="1px"
              >
                <VerifiedAvatar />
              </Box>
            </VStack>
          </ Box>
        </GridItem>
      </SimpleGrid>
    </VStack>
  )
}