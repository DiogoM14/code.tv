import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1208px;
  margin: 0 auto;
  padding: 0 2rem;

  display: grid;

  grid-template-columns: 250px auto;
  grid-template-rows: 66px auto;

  grid-template-areas:
  'SB HD'
  'SB MC'
  'SB MC';
  
  height: 100%;
`