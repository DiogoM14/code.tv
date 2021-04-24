import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  .keen-slider {
    position: relative;
    background: var(--gray-600);
    max-height: 370px;
    border-radius: 5px;
    cursor: pointer;

    & .slider__right-side {
      position: absolute;
      margin-left: 70%;
      padding: 3rem;

      h1 {
        font-size: 1.5rem;
      }

      p {
        color: var(--text);
        font-size: 14px;
        margin: 10px 0;
        height: 40px;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 150%;
      }
    }

    img {
      object-fit: cover;
      width: 70%;
      height: 370px;
    }
  }
`
