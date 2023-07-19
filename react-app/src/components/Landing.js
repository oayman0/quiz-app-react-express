import {Box, Image, Button, Text } from '@chakra-ui/react'
import LandingImg from '../images/landing.jpg'

function Landing({ setQuizHasStarted }) {
   const handleClick = () => {
      setQuizHasStarted(() => true)
   }
   return (
      <>
         <Box display="flex" flexDirection='column' justifyContent='space-evenly' alignItems='center' minH="80vh" mt='20px'>
            <Image borderRadius='full' boxSize='250px' src={LandingImg}
               alt='A smiling boy using a tablet' />
            <Text 
            as='h2' 
            color='#e51d74'>
               Word Quiz App 
            </Text>
            <Text as='h4'
            textAlign='center'
            maxW='50vw'
            >
               A 10 question quiz to test your language skills.
            </Text>
            <Button size='lg' color="#ffffff" bg="#78b517" _hover={{ bg: "#66a30d" }} m='10px'  borderRadius='50px'  onClick={handleClick} w='50vw' > Start Now</Button>
         </Box>
      </>
   );
}
export default Landing;
