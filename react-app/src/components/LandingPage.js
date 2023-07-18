import { SimpleGrid, Box, Image, Heading, Button, Text } from '@chakra-ui/react'
import Landing from '../images/landing.jpg'
function LandingPage({ setQuizHasStarted }) {
   const handleClick = () => {
      setQuizHasStarted(() => true)
   }
   return (
      <Box  >
         <SimpleGrid columns={1} spacing={4} justifyItems='center' alignItems='center' mt='20px' minH='70vh'>
            <Image borderRadius='full' boxSize='250px' src={Landing}
               alt='A smiling boy using a tablet' />
            <Heading fontSize='3xl' color='#e51d74' textAlign="center">
               Word Game
            </Heading>
            <Text fontSize='xl' marginLeft='20vw' marginRight='20vw'>
               A 10 question game to test your language skills.
            </Text>
            <Button size='lg' color="#ffffff"bg="#78b517" _hover={{ bg: "#66a30d" }} m='10px'  borderRadius='50px'  onClick={handleClick} > Start Now</Button>
         </SimpleGrid>
      </Box>
   );
}
export default LandingPage;
