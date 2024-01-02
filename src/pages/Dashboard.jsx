import { Box, Container, Heading, Text } from "@chakra-ui/react";

export default function Dashboard() {

  const boxStyles = {
    p: "10px",
    bg: "purple.400",
    color: "white",
    m: "10px",
    taextAlign: "center",
    filter: "blur(2px)",
    ':hover': {
      color: "black",
      bg: "blue.200"
    }
  }

  return (
    <Container as="section" maxWidth="4xl" py="20px">
      <Heading my="30px" p="10px">Heading</Heading>
      <Text marginLeft="30px"> dsfasd sdfsa sdfa sfafasfasfasfdsa</Text>
      <Text marginLeft="30px" color="blue.300" fontWeight="bold"> dsfasd sdfsa sdfa sfafasfasfasfdsa</Text>

      <Box my="30px" p="20px" bg="orange">
        <Text color="white">This is a Box</Text>
      </Box>

      <Box sx={boxStyles}>
        Hello, Ninjas
      </Box>

    </Container>
  )
}
