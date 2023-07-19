import { Center, Text, Box } from "@chakra-ui/react";

const Question = ({ question }) => {
  return (
    <>
      <Text as='h3' fontWeight="bold" ml='10vw' color='blackAlpha.700'>
        Choose the correct answer:
      </Text>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mb='2'>
        <Text as='h3' m={4}color='blackAlpha.700'>
          The word
        </Text>
        <Center bg='white' h='50px'>
          <Text as='h3' fontWeight="bold" m={4}color='blackAlpha.700' >
            {question.word}
          </Text>
        </Center>
        <Text as='h3' m={4}color='blackAlpha.700'>
          is considered
        </Text>
      </Box>
    </>
  );
};

export default Question;
