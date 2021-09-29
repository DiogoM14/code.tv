import { VStack, Heading } from '@chakra-ui/react'

import { categories } from '../../utils/categories'

import { Category } from './Category'

export function Menu() {
  return (
    <VStack 
      w="full"
      spacing={8}
      align="flex-start"
      pb={12}
      mb={12}
      borderBottom="1px"
      borderColor="#34373C"
    >
      <Heading size="xs" color="#808191" mb={-2} fontWeight="semibold">MENU</Heading>

      {categories.map(category => (
        <Category 
          key={category.id}
          title={category.title}
          icon={category.icon}
        />
      ))}
    </VStack>
  )
}