import { defineConfig } from 'tsup';
import baseConfig from './base-tsup.js';

export default defineConfig({
  ...baseConfig,
  external: ['react'],
});
