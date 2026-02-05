import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/~halil/",  // <-- unbedingt ersetzen
  plugins: [react()],
  test: { environment: "jsdom" } // optional für Vitest
});