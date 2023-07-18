import { Box, Heading, Progress, IconButton } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
const ProgressBar = ({ value ,handleExit}) => {
    return (
        <>
        
            <Box
                display="flex"
                flexDirection="row"
                justifyContent='space-evenly'
                alignItems='center' p='10px'
            >
                <IconButton
                    icon={<CloseIcon />}
                    aria-label="Exit"
                    size="md"
                    borderRadius='20px'
                    variant='ghost'
                    onClick={handleExit}
                />
                <Progress
                    value={value}
                    size="md"
                    hasStripe
                    colorScheme="pink"
                    w='60vw'
                    borderRadius="10px"
                    bg='white'
                />
                <Heading
                    as='h5'
                    size='md'
                >
                    {value}%
                </Heading>
            </Box>
        </>
    )
}
export default ProgressBar;