import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"
import { Grid, GridItem } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)"bg="gray.200">
      <GridItem
        as="aside"
        colSpan={{base: 6, lg: 2, xl: 1}}
        bg="purple.400"
        minHeight={{lg: '100vh', }}
        p={{base: '20px', lg: '30px'}}
      >

        <span>sidebar</span>

      </GridItem>
      
      <GridItem colSpan={{base: 6, lg: 4, xl: 5}}>
        <Navbar/>
        <Outlet />
      </GridItem>
    </Grid>
  )
}
