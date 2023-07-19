import { Button } from "@chakra-ui/react";

const AnswerOption = ({
  pos,
  index,
  selectedAnswer,
  showFeedback,
  handleAnswerSelection,
}) => {
  const handleClick = () => {
    if (!showFeedback) {
      handleAnswerSelection(index);
    }
  };

  return (
    <Button
      w="50vw"
      p={2}
      mr={2}
      mb={3}
      borderRadius="50px"
      borderWidth="1px"
      colorScheme={selectedAnswer === index ? "blue" : "gray"}
      borderColor="gray"
      variant={selectedAnswer === index ? "solid" : "outline"}
      onClick={handleClick}
      isDisabled={showFeedback}
    >
      {pos}
    </Button>
  );
};

export default AnswerOption;
