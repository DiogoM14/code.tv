import Head from 'next/head'

import { Header } from '../components/Header'

import { Container } from './homeStyles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Container>
        <Header />

      </Container>
    </>
  )
}
