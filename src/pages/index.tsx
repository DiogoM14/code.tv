import Head from 'next/head'
import { Grid, GridItem, Container } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { AsideBar } from '../components/AsideBar'
import { MainContent } from '../components/MainContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Container 
        maxW="container.xl" 
        p={8}
      >
        <Grid 
          w="100%"
          templateColumns="260px auto"
          templateRows="48px auto"
        >
          <GridItem rowSpan={2}>
            <AsideBar  />
          </GridItem>

          <Header  />
          <MainContent />
        </Grid>
      </Container>
    </>
  )
}
