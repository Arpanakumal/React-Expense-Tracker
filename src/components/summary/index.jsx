import { Box, Flex,Text,
     Heading } from "@chakra-ui/react";
import TransactionForm from "../add-transactions";
import TransactionChartSummary from "../Chart";




export default function Summary({ onClose, isOpen }) {
    return(
     <Box
    p='6'
    border='1px solid'
    borderColor='gray.100'
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
        <Flex justifyContent='space-evenly'
        alignItems='center'
        bg='gray.50'
        w='full'
        h='100px'
        border='1px solid'
        borderColor='gray.100'
        >
            <Flex flexDirection='column'>
                <Heading color='gray.700'>Rs.100</Heading>
                <Text color='gray.600'>Total Income</Text>

            </Flex>

        </Flex>
        <Flex justifyContent='space-evenly'
        alignItems='center'
        bg='gray.50'
        w='full'
        h='100px'
        border='1px solid'
        borderColor='gray.100'
        >
            <Flex flexDirection='column'>
                <Heading color='gray.700'>Rs.100</Heading>
                <Text color='gray.600'>Total Expenses</Text>

            </Flex>

        </Flex>
            </Flex>
            <Box flex='1' mt='10' ml='-90px' mr='5' width='300px'
            height='300px' display='flex' alignItems='center' justifyContent='center'>


                <Heading>
                    <TransactionChartSummary expense={100} income={1000} />
                </Heading>

            </Box>

        </Flex>
        <TransactionForm onClose={onClose} isOpen={isOpen}
         />

    </Box>
    );
}