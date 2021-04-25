import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-bottom: 1rem;

    span {
      color: #fe3a7d;
      font-size: 2.3rem;
      font-weight: 700;
    }
  }

  hr {
    width: 100%;
    margin: auto;
    margin-left: 2rem;
    border: 1px solid var(--gray-500);
  }
`
