import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  assetsInclude: ["**/*.JPG", "**/*.png", "**/*.svg"],
  server: {
    proxy: {
      "/api": {
        target: "https://api.rawg.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
