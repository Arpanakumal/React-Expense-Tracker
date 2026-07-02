import { Box, Flex,Text,
     Heading } from "@chakra-ui/react";
import TransactionForm from "../add-transactions";
import TransactionChartSummary from "../Chart";




export default function Summary({ onClose, isOpen, totalExpense, totalIncome }) {
    return(
     <Box
    mt='10'
    p='6'
    border='1px solid'
    borderColor='gray.400'
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
        color='gray.800'
        >
            Balance is Rs. {totalIncome-totalExpense}
        </Heading>
        <Flex justifyContent='space-evenly'
        alignItems='center'
        bg='gray.300'
        w='full'
        h='100px'
        border='1px solid'
        borderColor='gray.400'
        

        >
            <Flex flexDirection='column'>
                <Heading color='gray.700'>Rs.{totalIncome}</Heading>
                <Text color='gray.700'>Total Income</Text>

            </Flex>

        </Flex>
        <Flex justifyContent='space-evenly'
        alignItems='center'
        bg='gray.300'
        w='full'
        h='100px'
        border='1px solid'
        borderColor='gray.400'
        >
            <Flex flexDirection='column'>
                <Heading color='gray.700'>Rs.{totalExpense}</Heading>
                <Text color='gray.700'>Total Expenses</Text>

            </Flex>

        </Flex>
            </Flex>
            <Box flex='1' mt='10' ml='-90px' mr='5' width='300px'
            height='300px' display='flex' alignItems='center' justifyContent='center'>


                <Heading>
                    <TransactionChartSummary expense={totalExpense} income={totalIncome} />
                </Heading>

            </Box>

        </Flex>
        <TransactionForm onClose={onClose} isOpen={isOpen}
         />

    </Box>
    );
}