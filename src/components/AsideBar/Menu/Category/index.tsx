import { useState } from 'react';

import { Container, IconWrapper } from "./styles";

type Props = {
  title: string
  icon: string
}

export function Category({ title, icon }: Props) {
  const [ isActive, setIsActive ] = useState(false)

  function handleIsActive() {
    setIsActive(!isActive)
  }

  console.log('sdf')

  return (
    <Container onClick={handleIsActive} isActive={isActive}>
      <IconWrapper isActive={isActive}>
        <img src={icon} alt={title} />
      </IconWrapper>

      <h2>{title}</h2>
      
    </Container>
  )
}