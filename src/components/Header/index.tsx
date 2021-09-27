import { Flex } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";


export function Header() {
  return (
    <Flex justify="space-between">
      <SearchInput />
      <Profile />
    </Flex>
  )
}