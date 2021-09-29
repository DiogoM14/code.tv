import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'

export function VerifiedAvatar() {
  return (
    <Avatar 
      name="Diogo Martins"  
      src="https://github.com/diogom14.png"  
    >
      <AvatarBadge borderColor="#242730" borderWidth="2px" bg="blue.300" boxSize="0.9em">
        <CheckIcon w="7px" h="7px" mt="2px" />
      </ AvatarBadge>
    </Avatar>
  )
}