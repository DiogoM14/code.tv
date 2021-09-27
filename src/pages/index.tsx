import Head from 'next/head'
import { Grid, Box, Center, Container } from '@chakra-ui/react'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Container maxW="1440px">

        <Grid 
          templateColumns="282px auto"
          mt="28px"
          >
          <Box  />
          <Header />
        </Grid>
        </Container>
    </>
  )
}
