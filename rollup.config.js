import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true,
      exports: "named",
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
      exports: "named",
    },
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
    postcss({
      modules: true, // Enable CSS modules
      extensions: [".css"],
      minimize: true,
      inject: true, // Automatically inject styles in <head>
      extract: false, // Don't extract CSS to separate file
      autoModules: true, // Automatically enable CSS modules for files with .module.css
    }),
  ],
  external: [
    "react",
    "react-dom",
    "react/jsx-runtime",
  ],
};
