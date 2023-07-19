import { Center, Text } from "@chakra-ui/react";

const Feedback = ({ isAnswerCorrect, showFeedback }) => {
  return (
    <Center h="50px">
      <Text
        as="h4"
        choose
        color={isAnswerCorrect ? "green.500" : "red.500"}
      >
        {showFeedback && isAnswerCorrect
          ? "That's right!"
          : showFeedback
          ? "Sorry, that's not correct.."
          : ""}
      </Text>
    </Center>
  );
};

export default Feedback;
