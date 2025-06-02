import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // Wymagane dla GitHub Pages
  buildDirectory: "dist", //
  basename: "/", //
} satisfies Config;
