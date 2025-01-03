import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false, // Don't minify - let consumers handle this
  treeshake: true,
  skipNodeModulesBundle: true,
  shims: true, // Add shims for better compatibility
});
