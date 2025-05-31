import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  base: "/JordanAATravel/", // Musi być zgodne z basename
  build: {
    outDir: "dist/",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      output: {
        assetFileNames: "client/assets/[name]-[hash][extname]",
      },
    },
  },
});
