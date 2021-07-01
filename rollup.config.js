import sass from 'rollup-plugin-sass'
import typescript from 'rollup-plugin-typescript2'
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

import pkg from './package.json'



export default {
    input: 'src/lib/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            exports: 'named',
            sourcemap: true,
            // sourcemap: 'inline',
            strict: false
        },
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss(),
        sass({ insert: true }),
        // typescript({ objectHashIgnoreUnknownHack: false })
    ],
    external: [ 'react','react-dom','./App.css', './index.css']
}