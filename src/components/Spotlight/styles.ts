import styled from 'styled-components'

export const Container = styled.div`
.keen-slider {
  position: relative;
  background: var(--gray-600);
  max-height: 370px;
  border-radius: 5px;
  cursor: grab;
  margin-bottom: 2.5rem;
  
  .slider__right-side {
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
      margin: 1.5rem 0;
    }
    
    .reviews {
      color: var(--text); 
    }
    
    h2 {
      padding: 1.5rem 0;
    }
    
    .promo {
      display: flex;
      align-items: center;
      
      h3 {
        text-decoration: line-through;
        margin-left: 1rem;
        color: var(--text);
      }
    }
    
    button {
      background: #fe3a7d;
      border: 0;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
    }
  }
  
  img {
    object-fit: cover;
    width: 70%;
    height: 370px;
  }
}
`

export const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
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