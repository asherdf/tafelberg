import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
// import { terser } from "rollup-plugin-terser";

export default {
    input: "src/index.js",
    output: [
        {
            file: "public/bundle.js",
            format: "es",
            sourcemap: true
        }
    ],
    plugins: [
        json(),
        resolve(),
        commonjs(),
        // terser()
    ]
};