import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

const PROD = !JSON.parse(process.env.PROD_ENV || "0");

const extensions = [
    ".js", ".jsx", ".ts", ".tsx",
];

const name = "typedBrowserStorage";

export default {
    input: "./src/index.ts",

    // Specify here external modules which you don"t want to include in your bundle (for instance: "lodash", "moment" etc.)
    // https://rollupjs.org/guide/en/#external
    external: [],

    plugins: [
        // Allows node_modules resolution
        resolve({ extensions }),

        // Allow bundling cjs modules. Rollup doesn"t understand cjs
        commonjs(),

        // Compile TypeScript/JavaScript files
        babel({
            extensions,
            babelHelpers: "bundled",
            include: ["src/**/*"],
            inputSourceMap: false,
        }),

        // minify
        terser({ compress: PROD })
    ],

    output: [{
        sourcemap: true,
        file: pkg.main,
        format: "cjs",
    }, {
        sourcemap: true,
        file: pkg.module,
        format: "es",
    }, {
        sourcemap: true,
        file: pkg.browser,
        format: "umd",
        esModule: false,
        name,
        exports: "named",

        // https://rollupjs.org/guide/en/#outputglobals
        globals: {},
    }],
};