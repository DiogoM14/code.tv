import { Avatar, HStack, Text, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, useBreakpointValue } from "@chakra-ui/react";

import { BellIcon } from '@chakra-ui/icons'
import { FiChevronDown } from 'react-icons/fi'

export function Profile() {
  const isName = useBreakpointValue({
    base: true,
    xl: false,
    lg: false,
    md: false,
    sm: false,
  })

  return (
    <HStack
      w="full"
      maxW="280px"
      spacing={12}
    >
      <HStack spacing={3}>
        <Avatar 
          name="Diogo Martins"  
          src="https://github.com/diogom14.png"  
        />

        {!isName && <Text>Diogo Martins</Text>}

        <Menu placement="bottom" closeOnBlur={true}>
          <MenuButton>
            <FiChevronDown color="#fff" size="20" />
          </MenuButton>
          <MenuList 
            bgColor="#353340"
            border="none"
          >
            <MenuGroup color="#808191" title="Profile">
              <MenuItem _hover={{ bg: "#808191" }}>My Account</MenuItem>
              <MenuItem _hover={{ bg: "#808191" }}>Payments </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup color="#808191" title="Help">
              <MenuItem _hover={{ bg: "#808191" }}>Docs</MenuItem>
              <MenuItem _hover={{ bg: "#808191" }}>FAQ</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      </HStack>

      <BellIcon 
        color="#808191" 
        w={6} 
        h={6} 
      />
      
    </HStack>
  )
}