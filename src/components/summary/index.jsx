import { Box, Flex, Heading } from "@chakra-ui/react";




export default function Summary (){
    return <Box
    p='6'
    border='1px solid'
    borderColr='gray.100'
    overflow='hidden'
    borderRadius='10'
    background='white'
    display='flex'>

        <Flex
        w='full'
        justifyContent='center'
        alignItems='center'
        flexDirection={{
  base: "column",
  sm: "column",
  md: "column",
  lg: "row",
  xl: "row",
}}>
            <Flex flex='1'
            flexDirection='column'
            alignItems='center'
            justifyContent='space-evenly'
            ml='-20'
            mr='2'

            >

        <Heading
        size='md'
        ms='4'
        color='gray.600'
        >
            Balance is 100
        </Heading>
            </Flex>

        </Flex>

    </Box>
}