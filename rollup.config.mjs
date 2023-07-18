
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/barnet.ts',
  output: {
    dir: '.',
    format: 'esm'
  },
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs(),
    terser(),
  ]
}