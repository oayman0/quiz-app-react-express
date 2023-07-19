import { useRef, useEffect } from "react";
import { Text, Box, Button, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
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

      <Box display="flex" flexDirection="column" justifyContent='space-evenly' alignItems='center' minH='80vh'>

        <Text as='h4' width='50vw' color='blackAlpha.700'>
          You have answered {score / 10} out of 10 questions correctly.
        </Text>
        <CircularProgress size='150px' value={score}
          color={score >= 50 ? 'green.400' : 'red.400'}
        >
          <CircularProgressLabel>{score}%</CircularProgressLabel>
        </CircularProgress>
        {rank !== null ? (<>
          <Text as='h4' color='blackAlpha.700'>
            Your rank is above
          </Text>
          <Text as='h4' color='blackAlpha.700'>{rank}%</Text>
          <Text as='h4' color='blackAlpha.700'>of the leaderboard.</Text>
        </>
        ) : (
          <Text as='h3' fontWeight="bold" color='blackAlpha.700'>
            Calculating Rank...
          </Text>
        )}
        <Box display="flex" justifyContent="center" mt={4} >
          <Button onClick={handleTryAgain} w='50vw' colorScheme="yellow" borderRadius='50px'>Try Again</Button>
        </Box>
        <Box display="flex" justifyContent="center" mt={4}>
          <Button onClick={handleExit} w='50vw' color="#ffffff" bg="#78b517" _hover={{ bg: "#66a30d" }} borderRadius='50px'>New Quiz</Button>
        </Box>

        <audio ref={successSoundRef} hidden>
          <source src={successSoundFile} type="audio/mpeg" />
        </audio>

      </Box>
    </>
  );
};

export default QuizScore;
