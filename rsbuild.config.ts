import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginCssMinimizer } from "@rsbuild/plugin-css-minimizer";

export default defineConfig({
  server: {
    port: 3000,
  },
  output: {
    cssModules: {
      auto: (resource) => {
        return resource.includes('.module.') || resource.includes('shared/');
      },
    },
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  plugins: [pluginReact(), pluginCssMinimizer()],
});
