import { Center, Image } from '@chakra-ui/react';
import Logo from '../images/logo.svg'
function Navbar() {
    return (     
    <Center h='48px' bg='white' borderBottom='1px' borderColor='#D9D9D9'>
               <Image h='32px' src={Logo} alt='Nagwa Logo' />
            </Center>
    );
  }
  export default Navbar;
  