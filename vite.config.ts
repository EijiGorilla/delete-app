import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     open: true,
//   },
//   base: "/delete-app/",
// });

export default defineConfig(({ command }) => {
  if (command === "build") {
    return {
      plugins: [react()],
      base: "./delete-app/", // Use this path for production builds
      // ...
    };
  }
  return {
    plugins: [react()],
    base: "/", // Use default path for development server
    // ...
  };
});
