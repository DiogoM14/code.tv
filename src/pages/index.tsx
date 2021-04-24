import Head from 'next/head'
import { Spotlight } from '../components/Spotlight'
import { Container } from './homeStyles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Container>
        <Spotlight />
      </Container>
    </>
  )
}
