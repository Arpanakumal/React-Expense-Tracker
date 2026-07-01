import { Flex, Heading, Button, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import TransactionForm from "../add-transactions";
import ExpenseView from "../Expense-view";

export default function Main() {

  const {isOpen, onOpen, onClose} = useDisclosure();





  return (
    <Flex flexDirection="column" px="5">
      <Flex alignItems="center" justifyContent="space-between" mt="12">
        
        <Heading color="blue.400">
          Expense Tracker
        </Heading>

        <Flex alignItems="center">
          <Button onClick={onOpen}
          bg="blue.500" color="white" ml="4">
            Add New Transactions
          </Button>
        </Flex>

      </Flex>
      
     <Summary />

<TransactionForm
  isOpen={isOpen}
  onClose={onClose}
/>

      <Flex 
      w='full'
      alignItems='flex-start'
      justifyContent='space-evenly'
      flexDirection={['column','column','column','row','row']}>
       
        <ExpenseView/>
        <ExpenseView/>
      </Flex>
    </Flex>
  );
}