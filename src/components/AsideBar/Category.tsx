import { Center, Text, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Props {
  title: string
  icon: string
}

export function Category({ title, icon }: Props) {
  const [ isSelected, setIsSelected ] = useState(false)

  function handleIsSelected() {
    setIsSelected(!isSelected)
  }

  return (
    <Flex
      align="center"
      mb={8}
      cursor="pointer"
      onClick={handleIsSelected}
    >
      <Center 
        w="32px"
        h="32px"
        borderRadius="12px"
        bgColor={isSelected ? "#FF7551" : "#353340"}
      >
        <img src={icon} alt={title} />
      </Center>
      <Text
        ml={4}
        fontWeight={isSelected ? "bold" : "regular"}
        color={isSelected ? "#fff" : "#808191"}
      >
        {title}
      </ Text>
    </ Flex>
  )
}