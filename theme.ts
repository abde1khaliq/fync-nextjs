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
        accentW: { value: "#1c1a17" },
        accentWB: { value: "#2e2b26" },
      },
      fonts: {
        inter: { value: "inter" },
        allura: { value: "allura" },
      },
    },
  },
});

const system = createSystem(config, defaultConfig);

export default system;
