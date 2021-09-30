import { HStack, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from "./Profile";
import { SearchInput } from "./SearchInput";

export function Header() {
  const isSearch = useBreakpointValue({
    base: true,
    xl: false,
    lg: false,
    md: false,
    sm: false,
  })

  return (
    <HStack 
      w="full"
      spacing={4}
    >
      {!isSearch && <SearchInput />}

      <Profile />
    </HStack>
  )
}