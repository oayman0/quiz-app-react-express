import ProgressBar from "./ProgressBar";
import AnswerOption from "./AnswerOption";
import Question from "./Question";
import Feedback from "./Feedback";

import { Box, Button, Text } from "@chakra-ui/react";

const Quiz = ({
    questions,
    questionIndex,
    handleExit,
    selectedAnswer,
    showFeedback,
    handleAnswerSelection,
    isAnswerCorrect,
    handleNextQuestion,
    handleSubmit,
}) => {
    const currentQuestion = questions[questionIndex];
    const isSubmitDisabled = selectedAnswer === null || showFeedback;
    return (
        <>
            {questions.length ? (
                <>
                    {/* Progress Bar */}
                    <ProgressBar value={questionIndex * 10} handleExit={handleExit} />
                    <Box
                        minH="80vh"
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-evenly"
                        mb="0px"
                    >
                        {/* Question Component */}
                        <Question question={currentQuestion} />

                        <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                        >
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
            )}
        </>
    )
}
export default Quiz;