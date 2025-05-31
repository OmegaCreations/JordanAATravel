import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // Wymagane dla GitHub Pages
  buildDirectory: "dist",
  basename: "/JordanAATravel/", // Uwaga na slashy!
} satisfies Config;
