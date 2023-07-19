
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
      w='50vw'
      borderRadius='50px'
      onClick={handleClick}
      colorScheme={selectedAnswer === index ? "blue" : "gray"}
      borderColor='gray'
      variant={selectedAnswer === index ? "solid" : "outline"}
      borderWidth='1px'
      p={2}
      mr={2}
      mb={3}
      isDisabled={showFeedback}
    >
      {pos}
    </Button>
  );
};

export default AnswerOption;
