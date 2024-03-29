import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Grid, GridItem } from "@chakra-ui/react"
import Sidebar from "../components/sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)"bg="gray.200">
      <GridItem
        as="aside"
        colSpan={{base: 6, lg: 2, xl: 1}}
        bg="brand.600"
        minHeight={{lg: '100vh', }}
        p={{base: '20px', lg: '30px'}}
      >

        <Sidebar/>

      </GridItem>
      
      <GridItem  pl="50px" pr="50px" pb="50px" bg="white" colSpan={{base: 6, lg: 4, xl: 5}}>
        <Navbar/>
        <Outlet/>
      </GridItem>
    </Grid>
  )
}
