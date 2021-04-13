import styled from 'styled-components'

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  background: var(--gray-600);
  box-shadow: rgb(18 18 20) 0px 1rem 2rem;
`

export const Container = styled.header`
  max-width: 1900px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  height: 4rem;
  padding: 2rem;
  align-items: center;
`

export const LeftSide = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.4rem;
  }

  span {
    color: #fe3a7d;
    font-size: 1.4rem;
    font-weight: 700;
  }
`

export const Divider = styled.div`
  width: 1px;
  height: 3rem;
  margin: 0 2rem;

  background: var(--text);
`

export const RightSide = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-left: 1.3rem;
  }
`

export const Avatar = styled.img`
  width: 3.25rem;
  height: 3.25rem;
  margin-left: 1.3rem;

  border-radius: 50%;
  border: 2px solid var(--text);
`