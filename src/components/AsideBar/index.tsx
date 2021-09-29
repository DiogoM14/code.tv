import { Flex, Heading, VStack } from '@chakra-ui/react'
import { Menu } from './Menu'

export function AsideBar() {
  return (
    <VStack align="flex-start" maxW="156px">
      <Flex h="48px" align="center" mb={12}>
        <Heading size="md">code.tv</Heading>
      </Flex>

      <Menu />
      <Menu />
    </VStack>
  )
}