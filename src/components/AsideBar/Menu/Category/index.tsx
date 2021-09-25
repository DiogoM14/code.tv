import { useState } from 'react';
import { IoMdHome } from 'react-icons/io'

import { Container, IconWrapper } from "./styles";

export function Category() {
  const [ isActive, setIsActive ] = useState(false)

  function handleIsActive() {
    setIsActive(!isActive)
  }

  return (
    <Container onClick={handleIsActive} isActive={isActive}>
      <IconWrapper isActive={isActive}>
        <img src="home.svg" alt="Home" />
      </IconWrapper>

      <h2>Discover</h2>
      
    </Container>
  )
}