import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@' : path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: ['react'],
      dirs: ["./components/**"],
      cache: true,
    }),
  ],
});
