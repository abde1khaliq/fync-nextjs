import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
    },
  },
  theme: {
    tokens: {
      colors: {
        accent: { value: "#5271ff" },
      },
      fonts: {
        body: { value: "inter" },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
