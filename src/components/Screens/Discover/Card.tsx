import { VStack, HStack, Box, Image, Text, Avatar, AvatarBadge } from "@chakra-ui/react";
import { VerifiedAvatar } from "../../VerifiedAvatar";

export function Card() {
  return (
    <VStack
      w="full"
      align="flex-start"
      spacing={7}
    >
      <HStack>
        <Box 
          maxW="260px" 
          w="100%" 
          borderRadius="18px" 
          overflow="hidden" 
          h="313px"
          bgColor="#242730"
        >
          <Image src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1506&q=80" />

          <Box px={5} py={4} pos="relative">
            <HStack mb={3}>
              <Text
                fontSize="sm"
                color="#B7B9D2"
                noOfLines={1}
              >
                Diogo Martins
              </Text>
              <Box w="7px" h="7px" borderRadius="7px" bgColor="#22B07D" />
            </HStack>

            <Text
              fontWeight="medium"
              mb={4}
              noOfLines={2}
            >
              ReactJS with ChakraUI course
            </Text>

            <Text
              fontSize="xs"
              color="#808191"
            >
              53K views  •  2 weeks ago
            </Text>

            <Box
              m={4}
              p={1}
              pos="absolute"
              top="-40px"
              right="0"
              borderRadius="100%"
              borderWidth="1px"
            >
              <VerifiedAvatar />
            </Box>
          </Box>
        </Box>
      </HStack>
    </VStack>
  )
}