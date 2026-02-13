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
        primary: { value: "#f5f5f5" },
        accent: { value: "#5271ff" },
        danger: { value: "#ee2400" },
      },
      fonts: {
        body: { value: "inter" },
      },
    },
  },
});

const system = createSystem(defaultConfig, config);

export default system;
