import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { comlink } from "vite-plugin-comlink";

export default defineConfig({
  plugins: [react(), comlink()],
  server: {
    open: true,
  },
  build: {
    outDir: "dist",
  },
  optimizeDeps: {
    include: ["@arcgis/map-components"],
  },
  base: "/delete-app/",
});
