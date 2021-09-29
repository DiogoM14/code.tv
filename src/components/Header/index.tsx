import { HStack } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";


export function Header() {
  return (
    <HStack 
      w="full"
      spacing={4}
    >
      <SearchInput />
      <Profile />
    </HStack>
  )
}