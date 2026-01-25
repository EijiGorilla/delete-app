import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    copy({
      targets: [{ src: "node_modules/@arcgis/core/assets", dest: "public" }],
      hook: "writeBundle",
    }),
    react(),
  ],
  server: {
    open: true,
  },

  optimizeDeps: {
    include: ["@arcgis/map-components"],
  },
  base: "/delete-app/",
});
