import { Box, Container, Flex } from "@chakra-ui/react";
import Main from "./components/Main/index";

const App = () => {
  return (
    <Container bg="#f8fafd" maxW="container.3xl" height="100vh" p="0">
      <Flex height="full">
        <Box w="full">
          <Main />
        </Box>
      </Flex>
    </Container>
  );
};

export default App;