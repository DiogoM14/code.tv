import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MC;
  
  margin-top: 2.5rem;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-weight: 500;
    font-size: 1.75rem;
    margin-top: 2.5rem;
  }
`;

export const HighLights = styled.div`
  display: grid;
  gap: 1.5rem;
  margin-top: 1.25rem;

  grid-template-columns: 1fr 1fr 1fr;

  grid-template-areas:
  'C1 C1 C2';
`

export const MostWatched = styled.div`
  display: grid;
  gap: 1.25rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  margin-top: 1.25rem;
`
