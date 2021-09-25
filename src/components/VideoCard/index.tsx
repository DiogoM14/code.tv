import { Avatar } from "../Avatar";
import { Container, Description, Wrapper } from "./styles";

export function VideoCard() {
  return (
    <Container>
      <p className="time">7 min</p>

      <img className="thumb" src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="" />

      <Description>
        <div className="avatar">
          <Avatar />
        </div>

        <Wrapper>
          <p className="author">Diogo Martins</p>
          <div className="isOnline"></div>
        </Wrapper>

        <p className="text">How to cook with perfection: 3 steps</p>
        <p className="data">53K views  •  2 weeks ago</p>
      </Description>
    </Container>
  )
}