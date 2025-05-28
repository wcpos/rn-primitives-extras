import { defineConfig, Options } from 'tsup';

export default defineConfig((options: Options) => ({
  entry: [
    'src/index.ts',
    'src/universal/index.ts',
    'src/universal/combobox.tsx',
    'src/universal/combobox.web.tsx',
    'src/native/index.ts',
    'src/native/combobox-native.tsx',
    'src/native/combobox-native.native.tsx',
    'src/web/index.ts',
    'src/web/combobox-web.tsx',
    'src/web/combobox-web.web.tsx',
  ],
  banner: {
    js: "'use client'",
  },
  clean: true,
  format: ['cjs', 'esm'],
  external: [
    'react',
    './universal',
    './combobox',
    '../native',
    './combobox-native',
    '../web',
    './combobox-web',
  ],
  dts: true,
  ...options,
  esbuildOptions(options) {
    options.jsx = 'preserve';
  },
}));
