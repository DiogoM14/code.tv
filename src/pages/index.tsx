import Head from 'next/head'
import { Spotlight } from '../components/Spotlight'
import { StartHere } from '../components/StartHere'
import { Container } from './homeStyles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Container>
        <h4>Learn more everyday</h4>
        <h4>with Code<span>.</span>tv</h4>

        <Spotlight />
        <StartHere />
      </Container>
    </>
  )
}
