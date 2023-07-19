import { ChakraProvider,CSSReset, extendTheme  } from '@chakra-ui/react'
import QuizPage from './pages/QuizPage';
import customTheme from './config/customTheme';
import API_BASE_URL from './config/apiConfig';
function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset/>
      <QuizPage API_BASE_URL={API_BASE_URL} />
    </ChakraProvider>
  );
}
export default App;
