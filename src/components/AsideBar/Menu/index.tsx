import { Category } from "./Category";
import { Categories, Container, Title } from "./styles";

export function Menu() {
  return (
    <Container>
      <Title>MENU</Title>

      <Categories>
        <Category />
        <Category />
        <Category />
        <Category />
      </Categories>
    </Container>
  )
}