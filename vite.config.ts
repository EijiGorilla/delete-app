import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
// https://vite.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [
    {
      name: "generate-version",
      buildStart() {
        const version = {
          version: process.env.npm_package_version,
          buildTime: new Date().toISOString(),
        };

        fs.writeFileSync("public/version.json", JSON.stringify(version));
      },
    },
    react(),
  ],
  base: "",
});
