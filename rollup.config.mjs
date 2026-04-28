// rollup.config.mjs
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import externalGlobals from 'rollup-plugin-external-globals';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8'));

const header =
    readFileSync(resolve(__dirname, 'dist/annotations.js'), 'utf-8') +
    '\n' +
    readFileSync(resolve(__dirname, 'header.js'), 'utf-8');

const isProduction = process.env.NODE_ENV === 'production';

export default {
    input: 'src/main.ts',
    output: [
        {
            file: resolve(__dirname, `dist/js/plugins/${pkg.name}.js`),
            name: pkg.namespace,
            format: 'iife',
            sourcemap: false,
            plugins: [
                terser({
                    compress: {
                        pure_getters: true,
                        unsafe: true,
                        passes: 2,
                    },
                    mangle: true,
                    format: {
                        comments: false,
                        preamble: header,
                    },
                }),
            ],
        },
        {
            file: resolve(
                __dirname,
                `${pkg.testProjectDir || 'dist'}/js/plugins/${pkg.name}.debug.js`
            ),
            name: pkg.namespace,
            format: 'iife',
            sourcemap: true,
            banner: header,
        },
    ],
    plugins: [
        typescript(),
        externalGlobals({
            rmmz: 'window',
        }),
    ],
};
