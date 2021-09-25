import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 313px;
  background-color: #252836;
  border-radius: 20px;

  .time {
    position: absolute;
    right: 0;
    margin: 0.75rem;
    padding: 2px 5px;
    border-radius: 7px;
    color: #fff;
    background: rgba(0, 0, 0, 0.55);
    font-weight: 500;
    font-size: 0.75rem;
  }

  .thumb {
    width: 100%;
    height: 160px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }
`;

export const Description = styled.div`
  position: relative;
  padding: 0 1rem;

  div.avatar {
    position: absolute;
    right: 0;
    top: -45px;
    margin-right: 1rem;
  }

  .author {
    font-size: 0.85rem;
    color: #B7B9D2;
  }

  .text {
    line-height: 1.3;
    margin-top: 0.5rem;
    font-weight: 500;
    color: #fff;

    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical; 
  }

  .data {
    margin-top: 0.7rem;
    font-size: 0.8rem;
    color: #808191;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.7rem;
  
  .isOnline {
    width: 7px;
    height: 7px;
    margin-left: 0.5rem;
    background-color: #22B07D; /* FF7551 */
    border-radius: 7px;
  }
`
