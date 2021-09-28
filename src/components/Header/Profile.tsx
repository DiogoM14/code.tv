import { Flex, Avatar, HStack, Text, Menu, MenuButton, MenuList, MenuGroup, MenuItem, MenuDivider, Badge } from "@chakra-ui/react";
import { BellIcon } from '@chakra-ui/icons'
import { FiChevronDown } from 'react-icons/fi'


export function Profile() {
  return (
    <Flex
      w="100%"
      maxW="280px"
      justify="space-between"
      align="center"
      ml="6"
    >
      <HStack>
        <Menu placement="bottom" closeOnBlur={true}>
          <Avatar 
            name="Diogo Martins"  
            src="https://github.com/diogom14.png"
          />

          <Text>Diogo Martins</Text>

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
    </Flex>
  )
}