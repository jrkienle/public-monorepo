import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';
import baseConfig from './base-vitest.js';

export default defineConfig({
  ...baseConfig,
  plugins: [...baseConfig.plugins, react()],
  test: {
    ...baseConfig.test,
    environment: 'jsdom',
    include: [, ...baseConfig.test.include, 'src/**/*.test.tsx'],
  },
});
