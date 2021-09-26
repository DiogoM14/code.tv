import { VideoCard } from "../VideoCard";
import { MainCard } from "./MainCard";
import { SecondaryCard } from "./SecondaryCard";

import { Container, HighLights, MostWatched } from "./styles";

export function MainContent() {
  return (
    <Container>
      <h1>Discover</h1>

      <HighLights>
        <MainCard />
        <SecondaryCard />
      </HighLights>

      <h2>Most Watched</h2>

      <MostWatched>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </MostWatched>
    </Container>
  )
}