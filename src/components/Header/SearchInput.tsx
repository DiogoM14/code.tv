import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'

export function SearchInput() {
  return (
    <InputGroup>
      <InputLeftElement children={<SearchIcon color="#808191" />} />
      
      <Input 
        placeholder="Search"
        size="md"
        bgColor="#353340"
        w="100%"
        maxW="625px"
        border="none"
        mr={4}
      />
    </ InputGroup>
  )
}