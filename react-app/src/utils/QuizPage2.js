import { useState, useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import Quiz from "../components/Quiz";
import QuizScore from "../components/QuizScore";
import correctSoundFile from "../audio/correct.mp3";
import incorrectSoundFile from "../audio/incorrect.mp3";
import { fetchQuestions, calculateRank } from "./utils";

function QuizPage2() {
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

  // Function to fetch questions
  const fetchQuizQuestions = () => {
    const questions = fetchQuestions();
    setQuestions(questions);
  };

  // Function to calculate the rank
  const calculateQuizRank = (finalScore) => {
    const rank = calculateRank(finalScore);
    setRank(rank);
  };

  // Getting Questions from the utility function
  useEffect(() => {
    if (quizHasStarted) {
      fetchQuizQuestions();
    }
  }, [quizHasStarted]);

  // Calculating rank when the quiz is complete
  useEffect(() => {
    if (questionIndex === questions.length && questions.length !== 0) {
      setShowFeedback(false);
      calculateQuizRank(score);
    }
  }, [questionIndex, questions, score]);

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

  const getIndexOfAnswer = (question) => {
    const posOptions = ["noun", "verb", "adjective", "adverb"];
    return posOptions.indexOf(question.pos);
  };

  const isQuizComplete = questionIndex >= questions.length && questions.length !== 0;

  const handleTryAgain = () => {
    setScore(0);
    setRank(null);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
  };

  const handleExit = () => {
    setScore(0);
    setRank(null);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setQuizHasStarted(false);
  };

  const quizProps = {
    questions,
    questionIndex,
    selectedAnswer,
    isAnswerCorrect,
    showFeedback,
    handleAnswerSelection,
    handleNextQuestion,
    handleSubmit,
    handleExit,
  };

  const scoreProps = {
    score,
    rank,
    handleTryAgain,
    handleExit,
  };

  return (
    <Box bg="#fef4e2" minHeight="100vh">
      <Navbar />
      {/* Render components based on the quiz state */}
      {isQuizComplete ? (
        // Quiz Score Page
        <QuizScore {...scoreProps} />
      ) : quizHasStarted ? (
        // Quiz Page
        <Quiz {...quizProps} />
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
}

export default QuizPage2;
