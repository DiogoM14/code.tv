import Head from 'next/head'
import { Grid, GridItem, Container } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { AsideBar } from '../components/AsideBar'
import { Discover } from '../components/Screens/Discover'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Container 
        maxW="1440px" 
        px={8}
        py={7}
      >
        <Grid 
          w="100%"
          templateColumns={["80px auto", "80px auto", "80px auto", "260px auto"]}
          templateRows="48px auto"
        >
          <GridItem rowSpan={[1, 1, 1, 2]} colSpan={[1, 1, 1, 1]}>
            <AsideBar  />
          </GridItem>
          <GridItem>
            <Header  />
          </GridItem>
          <GridItem colSpan={[2, 2, 2, 1]}>
            <Discover />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}
