import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.jsx";
import GlobalState from "./context/index.jsx";
import theme from "./theme";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <GlobalState>
        <App />
      </GlobalState>
    </ChakraProvider>
  </StrictMode>
);