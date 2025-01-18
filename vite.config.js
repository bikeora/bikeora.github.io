import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // 指定打包输出目录
    outDir: ".", // 你可以将 'dist' 替换为你想要的目录名称
    // 确保清理目录时不删除根目录中的其他文件
    emptyOutDir: false,
  },
});
