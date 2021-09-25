import { categories } from "../../../utils/categories";

import { Category } from "./Category";

import { Categories, Container, Title } from "./styles";

export function Menu() {
  return (
    <Container>
      <Title>MENU</Title>

      <Categories>
        {categories.map(category => (
          <Category 
            key={category.id} 
            title={category.title} 
            icon={category.icon} 
          />
        ))}
      </Categories>
    </Container>
  )
}