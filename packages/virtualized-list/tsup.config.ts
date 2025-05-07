import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: [
    'src/index.ts',
    'src/universal/index.ts',
    'src/universal/virtualized-list.tsx',
    'src/universal/virtualized-list.web.tsx',
    'src/native/index.ts',
    'src/native/virtualized-list-native.tsx',
    'src/native/virtualized-list-native.native.tsx',
    'src/web/index.ts',
    'src/web/virtualized-list-web.tsx',
    'src/web/virtualized-list-web.web.tsx',
  ],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: [
    'react',
    './universal',
    './virtualized-list',
    '../native',
    './virtualized-list-native',
    '../web',
    './virtualized-list-web',
  ],
  dts: true,
  ...options,
  esbuildOptions(options) {
    options.jsx = 'preserve';
  },
}));
