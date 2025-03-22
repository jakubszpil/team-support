/// <reference types="vitest" />

import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(),
    !process.env.VITEST && reactRouter(),
    tsconfigPaths(),
  ],
  test: {
    include: ["app/**/*.{test,spec}.{ts,tsx}"],
    globals: true,
    watch: false,
    environment: "jsdom",
    passWithNoTests: true,
  },
});
