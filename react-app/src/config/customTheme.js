import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  styles: {
    global: {
     
      h1: {
        fontSize: ['24px', '28px', '32px', '36px'],
    },
    h2: {
        fontSize: ['20px', '24px', '28px', '32px'],
    },
    h3: {
        fontSize: ['18px', '20px', '22px', '24px'], 
    },
    h4: {
        fontSize: ['16px', '18px', '20px', '22px'], 
    },
    }, 
  },
});
 
export default customTheme;
