import type { Config } from "@react-router/dev/config";

export default {
  ssr: false, // Wymagane dla GitHub Pages
  buildDirectory: "dist/client", // 👈 ZMIANA - dodaj /client/
  basename: "/JordanAATravel/client/", // 👈 ZMIANA - dodaj /client/
} satisfies Config;
