import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function ExpenseView({ data, type }) {
  return (
    <Box
      flex={1}
      w="full"
      bg="white"
      mr="4"
      mt="10"
      p="5"
      pb="4"
      border="1px solid"
      borderColor="gray.400"
      borderRadius="12"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Heading size="md" color={type === "income" ? "blue.700" : "red.700"}>
          {type === "income" ? "Income" : "Expense"}
        </Heading>
      </Flex>

      {data.map((item, index) => (
        <Flex
          key={index}
          bg={type === "expense" ? "red.100" : "blue.100"}
          mt="4"
          justifyContent="space-between"
          alignItems="center"
          border="1px solid"
          borderColor={type === "expense" ? "red.200" : "blue.200"}
          p="4"
          borderRadius="8"
        >
          <Text fontWeight="bold" color="gray.600">
            {item.description}
          </Text>

          <Text>Rs. {item.amount}</Text>
        </Flex>
      ))}
    </Box>
  );
}