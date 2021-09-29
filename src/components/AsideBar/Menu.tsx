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
      <VStack spacing={6} align="flex-start">
        <Heading size="xs" color="#808191">MENU</Heading>

        {categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
          />
        ))}
      </VStack>

    </VStack>
  )
}