import { ChakraProvider } from '@chakra-ui/react'
import Quiz from './components/Quiz';
import './App.css';
function App() {
  return (
    <ChakraProvider>
      <Quiz />
    </ChakraProvider>
  );
}
export default App;
