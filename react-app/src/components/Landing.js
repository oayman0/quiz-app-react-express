import { Box, Image, Button, Text } from '@chakra-ui/react';
import LandingImg from '../images/landing.jpg';

const Landing = ({ setQuizHasStarted }) => {
  // Handle the click event for the "Start Now" button
  const handleClick = () => {
    setQuizHasStarted(() => true);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
      minH="80vh"
      mt="20px"
    >
      {/* Landing Image */}
      <Image
        borderRadius="full"
        boxSize="250px"
        src={LandingImg}
        alt="A smiling boy using a tablet"
      />

      {/* App Name */}
      <Text as="h2" color="#e51d74">
        Word Quiz App
      </Text>

      {/* Description */}
      <Text as="h4" textAlign="center" maxW="50vw">
        A 10 question quiz to test your language skills.
      </Text>

      {/* Start Now Button */}
      <Button
        size="lg"
        color="#ffffff"
        bg="#78b517"
        _hover={{ bg: "#66a30d" }}
        m="10px"
        borderRadius="50px"
        onClick={handleClick}
        w="50vw"
      >
        Start Now
      </Button>
    </Box>
  );
};

export default Landing;
