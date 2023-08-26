/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
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
    // This sometimes interferes with third-party packages
    '@typescript-eslint/no-unsafe-member-access': 'off',
    // This allows us to import dev deps in tests
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts'],
      },
    ],
    // Sometimes single exports lead to a cleaner codebase
    'import/prefer-default-export': 'off',
    // This allows us to use "export { default } from 'someFile';"" which reduces boilerplate
    'no-restricted-exports': 'off',
  },
};
