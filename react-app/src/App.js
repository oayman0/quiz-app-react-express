import { ChakraProvider,CSSReset, extendTheme  } from '@chakra-ui/react'
import QuizPage from './pages/QuizPage';
import QuizPage2 from './utils/QuizPage2';
import customTheme from './config/customTheme';
import API_BASE_URL from './config/apiConfig';
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset/>
      {/* <QuizPage API_BASE_URL={API_BASE_URL} /> */}
      <QuizPage2/> 
      {/* QuizPage2 is using local alternative to express server: utils.js */}
    </ChakraProvider>
  );
}
export default App;
