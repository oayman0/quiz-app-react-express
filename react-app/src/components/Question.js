import { Center, Text, Box } from "@chakra-ui/react";

const Question = ({ question }) => {
  return (
    <>
      <Text fontSize="md" fontWeight="bold" ml='10vw'>
        Choose the correct answer:
      </Text>
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        mb='2'>
        <Text fontSize="md" m={4}>
          The word
        </Text>
        <Center bg='white' h='50px'>
          <Text fontSize="xl" fontWeight="bold" m={4} >
            {question.word}
          </Text>
        </Center>
        <Text fontSize="md" m={4}>
          is considered
        </Text>
      </Box>
    </>
  );
};

export default Question;
