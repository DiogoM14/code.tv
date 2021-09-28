import Head from 'next/head'
import { Grid, Flex, GridItem, Center, Container } from '@chakra-ui/react'
import { Header } from '../components/Header'
import { AsideBar } from '../components/AsideBar'
import { MainContent } from '../components/MainContent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Code.TV</title>
      </Head>

      <Flex 
        maxW="1440px" 
        w="100%" 
        h="100vh" 
        mx="auto"
        px="6"
      >
        <Grid 
          w="100%"
          templateColumns="282px auto"
          templateRows="48px auto"
          mt="28px"
        >
          <GridItem
            rowSpan={2}
          >
            <AsideBar  />
          </GridItem>
          <Header />
          <MainContent />
        </Grid>
      </Flex>
    </>
  )
}
