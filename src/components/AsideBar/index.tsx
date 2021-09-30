import { Button, Flex, Heading, VStack, DrawerHeader, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/react'
import { useBreakpointValue } from "@chakra-ui/media-query"

import { Menu } from './Menu'
import { useSidebarDrawer } from '../../contexts/useSidebarDrawer'
import { HamburgerIcon } from '@chakra-ui/icons'

export function AsideBar() {
  const { isOpen, onClose, onOpen } = useSidebarDrawer()

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <>
        <Button mt="1" bgColor="transparent" colorScheme="teal" onClick={onOpen}>
          <HamburgerIcon w="5" h="5"  />
        </Button>
        
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="gray.800" p="4">
              <DrawerCloseButton mt="6" />
              <DrawerHeader>code.tv</DrawerHeader>

              <DrawerBody>
                <Menu />
                <Menu />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </>
    )
  }

  return (
    <VStack pos="fixed" align="flex-start" maxW="156px">
      <Flex h="48px" align="center" mb={12}>
        <Heading size="md">code.tv</Heading>
      </Flex>

      <Menu />
      <Menu />
    </VStack>
  )
}