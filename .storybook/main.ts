import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.story.mdx", "../src/**/*.story.tsx"],
  addons: [
    "@storybook/addon-links", 
    "@storybook/addon-essentials",
    "@storybook/addon-interactions", 
    "storybook-css-modules"
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {}
  },
  staticDirs: ["../public"],
  docs: {
    autodocs: true
  }
}

export default config;