import { useState, useEffect, useRef } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import Question from "../components/Question";
import AnswerOption from "../components/AnswerOption";
import Feedback from "../components/Feedback";
import QuizScore from "../components/QuizScore";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import ProgressBar from "../components/ProgressBar";

import correctSoundFile from "../audio/correct.mp3";
import incorrectSoundFile from "../audio/incorrect.mp3";

const QuizPage = ({ API_BASE_URL }) => {
  // State variables
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [rank, setRank] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [quizHasStarted, setQuizHasStarted] = useState(false);

  // Sound effects refs
  const correctSoundRef = useRef(null);
  const incorrectSoundRef = useRef(null);

  useEffect(() => {
    if (quizHasStarted) {
      fetchQuestions();
    }
  }, [quizHasStarted]);

  useEffect(() => {
    if (questionIndex === questions.length && questions.length !== 0) {
      setShowFeedback(false);
      calculateRank();
    }
  }, [questionIndex, questions]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(API_BASE_URL + "/words");
      const data = await response.json();
      setQuestions(data);
    } catch (error) {
      console.error("Error fetching word data:", error);
    }
  };

  const handleAnswerSelection = (index) => {
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) {
      return;
    }
    const currentQuestion = questions[questionIndex];
    const correctAnswerIndex = getIndexOfAnswer(currentQuestion);
    const isAnswerCorrect = selectedAnswer === correctAnswerIndex;
    setIsAnswerCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      correctSoundRef.current.play();
      setScore((prevScore) => prevScore + 10);
    } else {
      incorrectSoundRef.current.play();
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setQuestionIndex((prevIndex) => prevIndex + 1);
    setShowFeedback(false);
  };

  const calculateRank = async () => {
    try {
      const response = await fetch(API_BASE_URL + "/rank", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ finalScore: Number(score) }),
      });
      const data = await response.json();
      setRank(data.rank);
    } catch (error) {
      console.error("Error fetching rank from the backend:", error);
    }
  };

  const getIndexOfAnswer = (question) => {
    const posOptions = ["noun", "verb", "adjective", "adverb"];
    return posOptions.indexOf(question.pos);
  };

  const currentQuestion = questions[questionIndex];
  const isSubmitDisabled = selectedAnswer === null || showFeedback;
  const isQuizComplete =
    questionIndex >= questions.length && questions.length !== 0;

  const handleTryAgain = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setRank(null);
  };
  const handleExit = () => {
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setRank(null);
    setQuizHasStarted(false);
  };

  return (
    <Box bg="#fef4e2" minHeight="100vh">
      <Navbar />
      {/* Render components based on the quiz state */}
      {isQuizComplete ? (
        // Quiz Score Component
        <QuizScore
          score={score}
          rank={rank}
          handleTryAgain={handleTryAgain}
          handleExit={handleExit}
        />
      ) : quizHasStarted ? (
        questions.length ? (
          <>
            {/* Progress Bar */}
            <ProgressBar value={questionIndex * 10} handleExit={handleExit} />
            <Box minH="80vh" display="flex" flexDirection="column" justifyContent="space-evenly" mb="0px">
              {/* Question Component */}
              <Question question={currentQuestion} />

              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                {/* AnswerOption Components */}
                {["noun", "verb", "adjective", "adverb"].map((pos, index) => (
                  <AnswerOption
                    key={index}
                    pos={pos}
                    index={index}
                    selectedAnswer={selectedAnswer}
                    showFeedback={showFeedback}
                    handleAnswerSelection={handleAnswerSelection}
                    isAnswerCorrect={isAnswerCorrect}
                  />
                ))}
              </Box>

              {/* Feedback Component */}
              <Feedback isAnswerCorrect={isAnswerCorrect} showFeedback={showFeedback} />

              {/* Next Question Button */}
              {showFeedback ? (
                <Box display="flex" justifyContent="center" mt={4}>
                  {questionIndex < questions.length ? (
                    <Button onClick={handleNextQuestion} w="50vw" mb="30px" borderRadius="50px" colorScheme="yellow">
                      {questionIndex < questions.length - 1 ? "Next Question" : "Quiz Complete!"}
                    </Button>
                  ) : null}
                </Box>
              ) : (
                // Submit Button
                <Box display="flex" justifyContent="center" mt={4}>
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitDisabled}
                    w="50vw"
                    colorScheme={isSubmitDisabled ? "gray" : "green"}
                    mb="30px"
                    borderRadius="50px"
                    bg={isSubmitDisabled ? "blackAlpha.200" : "#78b517"}
                    _hover={isSubmitDisabled ? { bg: "blackAlpha.400" } : { bg: "#66a30d" }}
                  >
                    Submit
                  </Button>
                </Box>
              )}
            </Box>
          </>
        ) : (
          // Loading State(waiting for fetching data)
          <Box display="flex" justifyContent="center" p="50px">
            <Text>Loading the questions...</Text>
          </Box>
        )
      ) : (
        // Landing Page
        <Landing setQuizHasStarted={setQuizHasStarted} />
      )}
      {/* Sound effects audio elements */}
      <audio ref={correctSoundRef} hidden>
        <source src={correctSoundFile} type="audio/mpeg" />
      </audio>
      <audio ref={incorrectSoundRef} hidden>
        <source src={incorrectSoundFile} type="audio/mpeg" />
      </audio>
    </Box>
  );
};

export default QuizPage;