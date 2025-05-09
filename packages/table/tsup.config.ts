import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: [
    'src/index.ts',
    'src/universal/index.ts',
    'src/universal/table.tsx',
    'src/universal/table.web.tsx',
    'src/native/index.ts',
    'src/native/table-native.tsx',
    'src/native/table-native.native.tsx',
    'src/web/index.ts',
    'src/web/table-web.tsx',
    'src/web/table-web.web.tsx',
  ],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: [
    'react',
    './universal',
    './table',
    '../native',
    './table-native',
    '../web',
    './table-web',
  ],
  dts: true,
  ...options,
  esbuildOptions(options) {
    options.jsx = 'preserve';
  },
}));
