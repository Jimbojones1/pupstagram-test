import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000'
      }
    }
  },
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: "./index.html",
    },
  },
});