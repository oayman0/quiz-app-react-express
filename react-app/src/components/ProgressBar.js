import { Box, Text, Progress, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const ProgressBar = ({ value, handleExit }) => {
  return (
    <>
      {/* Progress Bar Container */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        p="10px"
      >
        {/* Exit Button */}
        <IconButton
          icon={<CloseIcon />}
          aria-label="Exit"
          size="md"
          borderRadius="20px"
          variant="ghost"
          onClick={handleExit}
        />

        {/* Progress Bar */}
        <Progress
          value={value}
          size="md"
          hasStripe
          colorScheme="pink"
          w="60vw"
          borderRadius="10px"
          bg="white"
        />

        {/* Percentage Text */}
        <Text as="h4" color="blackAlpha.700">
          {value}%
        </Text>
      </Box>
    </>
  );
};

export default ProgressBar;
