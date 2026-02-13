import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: { value: "#f5f5f5" },
        accent: { value: "#5271ff" },
        danger: { value: "#ee2400" },
      },
    },
  },
});

const system = createSystem(config, defaultConfig);

export default system
