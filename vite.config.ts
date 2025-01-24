import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { resolve } from "node:path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   resolve: {
      alias: {
         "@": path.resolve(__dirname, "src"),
         "@components": resolve(__dirname, "./src/components"),
         "@utils": resolve(__dirname, "./src/utils"),
       },
   },
})
