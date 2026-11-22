import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Split the big libraries into their own chunks: the first visit
        // downloads them in parallel and repeat visits get finer cache
        // granularity (assets are already 1-year immutable). The function
        // form is used because react-dom is imported as 'react-dom/client',
        // which the object form does not match.
        manualChunks: (id: string) => {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) return 'vendor-react';
          if (id.includes('node_modules/framer-motion') || id.includes('node_modules/motion-dom') || id.includes('node_modules/motion-utils')) return 'vendor-motion';
          if (id.includes('node_modules/gsap')) return 'vendor-gsap';
          return undefined;
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
