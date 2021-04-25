import { Container } from "./styles"

interface DividerProps {
  title: string
}

export function Divider({ title }) {
  return(
    <Container>
      <h1>{title}<span>.</span></h1>
      <hr/>
    </Container>
  )
}