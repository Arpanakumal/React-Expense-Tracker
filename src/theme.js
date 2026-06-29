import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    config: {
      initialColorMode: "light",
      useSystemColorMode: true,
    },
  },
});

export default system;