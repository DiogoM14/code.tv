import { Wrapper, Container, Divider, LeftSide, RightSide, Avatar } from "./styles"

import { FiMenu, FiSearch, FiBookmark, FiBell } from 'react-icons/fi'

export function Header() {
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <FiMenu color="#fff" size={24} />

          <Divider />

          <h1>Code<span>.</span>tv</h1>
        </LeftSide>
        
        <RightSide>
          <FiSearch color="#a8a8b2" size="1.5rem" />
          <FiBookmark fill="#a8a8b2" color="#a8a8b2" size="1.5rem" />
          <FiBell fill="#a8a8b2" color="#a8a8b2" size="1.5rem" />

          <Avatar src="https://github.com/diogom14.png" />
        </RightSide>
      </Container>
    </Wrapper>
  )
} 
