import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Prevent Next.js specific modules from being resolved
      "next/navigation": path.resolve(__dirname, "./src/lib/next-navigation-stub.ts"),
    },
  },
  build: {
    rollupOptions: {
      external: [],
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: [],
    include: ["@vercel/speed-insights/react", "@vercel/analytics/react"],
  },
}));
