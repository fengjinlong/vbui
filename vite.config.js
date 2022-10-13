import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "./config/unocss";
const rollupOptions = {
  external: ["vue", "vue-router", "bootstrap"],
  output: {
    globals: {
      vue: "Vue",
    },
    assetFileNames: `assets/[name].css`,
  },
};
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080,
    hot: true,
  },
  plugins: [
    vue(),
    // 添加UnoCSS插件
    // Unocss(),
  ],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true,
    lib: {
      entry: "./src/component/entry.ts",
      name: "VBUI",
      fileName: "vb-ui",
      // 导出模块格式
      formats: ["esm"],
    },
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
    coverage: {
      // provider: "istanbul", // or 'c8'
      provider: "c8", // or 'c8'
    },
  },
});
