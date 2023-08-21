import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    coverage: {
      all: true,
      // For some reason when coverage is enabled, it throws the following error:
      // TypeError: isMatch is not a function
      // I have no fucking idea why, but I don't have the time or patience to look deeper. This
      // unfortunately means I won't be bootstrapping the repo with codecov though
      enabled: false,
      exclude: ['index.ts', '**/*.stories.tsx', '**/*.test.ts'],
      include: ['src/**'],
      provider: 'v8',
      reporter: ['text', 'cobertura'],
      reportsDirectory: './coverage',
    },
    include: ['src/**/*.test.ts'],
    globals: true,
    outputFile: 'test-results/results.xml',
    reporters: ['default', 'junit'],
  },
});
