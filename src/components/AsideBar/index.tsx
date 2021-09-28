import { Flex, Heading } from '@chakra-ui/react'
import { Menu } from './Menu'

export function AsideBar() {
  return (
    <Flex
      direction="column"
    >
      <Flex h="48px" align="center" mb="12">
        <Heading size="md">code.tv</Heading>
      </Flex>

      <Menu />
      <Menu />
    </Flex>
  )
}