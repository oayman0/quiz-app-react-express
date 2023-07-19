import { useRef, useEffect } from "react";
import {
  Box,
  Text,
  Button,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import ProgressBar from "./ProgressBar";
import successSoundFile from "../audio/success.mp3";

const QuizScore = ({ score, rank, handleTryAgain, handleExit }) => {
  const successSoundRef = useRef(null);

  useEffect(() => {
    if (score > 0 && rank !== null) {
      successSoundRef.current.play();
    }
  }, [score, rank]);

  return (
    <>
      <ProgressBar value={100} handleExit={handleExit} />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        minH="80vh"
      >
        {/* Result */}
        <Text width="50vw" color="blackAlpha.700">
          You have answered {score / 10} out of 10 questions correctly.
        </Text>

        {/* Score Circle */}
        <CircularProgress
          size="150px"
          value={score}
          color={score >= 50 ? "green.400" : "red.400"}
        >
          <CircularProgressLabel>{score}%</CircularProgressLabel>
        </CircularProgress>

        {/* Rank */}
        {rank !== null ? (
          <>
            <Text color="blackAlpha.700">Your rank is above</Text>
            <Text color="blackAlpha.700">{rank}%</Text>
            <Text color="blackAlpha.700">of the leaderboard.</Text>
          </>
        ) : (
          <Text as="h3" fontWeight="bold" color="blackAlpha.700">
            Calculating Rank...
          </Text>
        )}

        {/* Try Again Button */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            onClick={handleTryAgain}
            w="50vw"
            colorScheme="yellow"
            borderRadius="50px"
          >
            Try Again
          </Button>
        </Box>

        {/* New Quiz Button */}
        <Box display="flex" justifyContent="center" mt={4}>
          <Button
            onClick={handleExit}
            w="50vw"
            color="#ffffff"
            bg="#78b517"
            _hover={{ bg: "#66a30d" }}
            borderRadius="50px"
          >
            New Quiz
          </Button>
        </Box>

        {/* Completion Sound Effect */}
        <audio ref={successSoundRef} hidden>
          <source src={successSoundFile} type="audio/mpeg" />
        </audio>
      </Box>
    </>
  );
};

export default QuizScore;
