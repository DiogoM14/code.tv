import { Flex, Heading } from '@chakra-ui/react'

import { categories } from '../../utils/categories'

import { Category } from './Category'

export function Menu() {
  return (
    <Flex 
      direction="column"
      borderBottom="1px"
      borderBottomColor="#34373C"
      mb={12}
      marginRight={16}
    >
      <Heading 
        size="xs" 
        color="#808191"
        mb={8}
      >
        MENU
      </Heading>

        {categories.map(category => (
          <Category 
            key={category.id}
            title={category.title}
            icon={category.icon}
          />
        ))}
    </Flex>
  )
}