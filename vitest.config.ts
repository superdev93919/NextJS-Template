import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["dotenv/config", "./vitest.setup.ts"],
    include: ["**/*.test.{ts,tsx}"]
  },
  resolve: {
    alias: {
      "#/": "./src/",
      "~/": "./public/"
    }
  }
});