import terser from '@rollup/plugin-terser';

export default {
    input: "app.js",
    output: {
        file: './dist/app.min.js',
        format: 'iife',
        sourcemap: "inline"
    },
    plugins: [
        terser()
    ]
}