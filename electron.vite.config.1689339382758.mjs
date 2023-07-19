// electron.vite.config.ts
import path from "node:path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
var electron_vite_config_default = defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    publicDir: path.resolve("resources")
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    define: {
      "process.platform": JSON.stringify(process.platform)
    },
    css: {
      postcss: {
        plugins: [
          tailwindcss({
            config: "./src/renderer/tailwind.config.js"
          })
        ]
      }
    },
    resolve: {
      alias: {
        "@renderer": path.resolve("src/renderer/src")
      }
    },
    plugins: [react()]
  }
});
export {
  electron_vite_config_default as default
};
