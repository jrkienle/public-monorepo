const baseConfig = require('./base-eslintrc.cjs');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    ...baseConfig.rules,
    // This conflicts with TypeScript and doesn't really work
    'react/require-default-props': 'off',
    // This helps us use headless component libraries and react-hook-form more easily
    'react/jsx-props-no-spreading': 'off',
    // This allows us to import dev deps in tests
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.stories.tsx', '**/*.test.ts', '**/*.test.tsx'],
      },
    ],
    // We use React 18, this is no longer needed
    'react/react-in-jsx-scope': 'off',
  },
};
