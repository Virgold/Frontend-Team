import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import webfontDownload from 'vite-plugin-webfont-dl';

export default defineConfig({
  plugins: [
    react(),
    webfontDownload([
      // 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
      'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
    ])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000
  }
})
