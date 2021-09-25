import styled from 'styled-components'

interface Props {
  isActive: boolean
}

export const Container = styled.div<Props>`
  display: inline-flex;
  width: 100%;

  margin-top: 1.75rem;
  align-items: center;
  cursor: pointer;

  h2 {
    margin-left: 1rem;
    font-size: 1.14rem;

    font-weight: ${props => props.isActive ? '600' : '400'};
    color: ${props => props.isActive ? '#fff' : '#808191'};
  }
`

export const IconWrapper = styled.div<Props>`
  width: 32px;
  height: 32px;
  display: flex;
  background-color: ${props => props.isActive ? '#FF7551' : '#353340'};

  align-items: center;
  justify-content: center;

  border-radius: 12px;

  .img {
    fill: green;
  }
`