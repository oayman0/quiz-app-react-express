import { ChakraProvider,CSSReset, extendTheme  } from '@chakra-ui/react'
import QuizPage from './components/QuizPage';
import customTheme from './config/customTheme';
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset/>
      <QuizPage />
    </ChakraProvider>
  );
}
export default App;
