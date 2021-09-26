import styled from 'styled-components'

export const Container = styled.div`
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    grid-template-areas:
      'HD'
      'MC'
      'MC';
  }

  width: 100%;
  max-width: 1408px;
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