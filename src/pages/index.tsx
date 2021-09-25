import Head from 'next/head'

import { AsideBar } from '../components/AsideBar'
import { Header } from '../components/Header'
import { MainContent } from '../components/MainContent'

import { Container } from './homeStyles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Container>
        <AsideBar />
        <Header />

        <MainContent />
      </Container>
    </>
  )
}
