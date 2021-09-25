import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 1.75rem;
  display: flex;

  justify-content: space-between;
`

export const Search = styled.input`
  width: 100%;
  height: 40px;
  max-width: 625px;

  background-color:  #353340;
  color: #808191;
  padding: 0 1rem;

  border-radius: 10px; 
  border: none;
`

export const UserAndNotifications = styled.div`
  display: inline-flex;
  align-items: center;

  div {
    display: inline-flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
    }

    p {
      color: #fff;
      font-size: 0.9rem;
      margin: 0 1rem;
    }
  }

  .notification-icon {
    margin-left: 1.9rem;
  }
`
