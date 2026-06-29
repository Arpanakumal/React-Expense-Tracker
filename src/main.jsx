import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App.jsx";
import GlobalState from "./context/index.jsx";
import system from "./theme";

createRoot(document.getElementById("root")).render(
  <GlobalState>
    <StrictMode>
      <ChakraProvider value={system}>
        <App />
      </ChakraProvider>
    </StrictMode>
  </GlobalState>
);