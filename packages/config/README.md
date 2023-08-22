# Config

Shared configuration files between all of the `@jrkienle` monorepo

## Installation

```bash
pnpm i @jrkienle/config -D
```

## Available Configurations

### ESLint

There are 3 ESLint configs to standardize linting between every app, package, and service in the
monorepo. The following ESLint configs are available:

`./eslint/base-eslintrc.cjs` - Used for anything that's not React-based
`./eslint/nextjs-eslintrc.cjs` - Used for any Next.js apps
`./eslint/react-eslintrc.cjs` - Used for any non-Next.js React apps

### Next.js

The Next.js config is used to standardize the configuration of all Next.js apps in the monorepo.
This config can be found at `./next/next.config.js`

#### Usage

If your `next.config.js` file, add the following lines:

```javascript
import nextConfig from '@jrkienle/config/next/next.config.js';
export default nextConfig;
```

### Prettier

The Prettier config is used to standardize all of the styles between every file in the monorepo.
This config can be found at `./prettier/.prettierrc.js`. It can be used in the following ways

#### Usage Via `package.json`

In your `package.json`, add the following line:

```json
{
  "prettier": "@jrkienle/config/prettier/.prettierrc.js"
}
```

### Usage Via `.prettierrc.js`

In your `.prettierrc.js`, add the following lines:

```javascript
import prettierConfig from '@jrkienle/config/prettier/.prettierrc.js';
export default prettierConfig;
```

### Tsup

There are two Tsup configs to standardize how we bundle packages between every package in the
monorepo. The following Tsup configs are available:

- `./tsup/base-tsup.js` - Tsup config for all non-React packages
- `./tsup/react-tsup.js` - Tsup config for all React packages

### TypeScript

There are 3 TypeScript configs to standardize type checking between every app, package, and service
in the monorepo. The following TSConfigs are available:

- `./typescript/base-tsconfig.json` - Common TypeScript rules that **every** project must use
- `./typescript/nextjs-tsconfig.json` - Next.js TypeScript rules based off of the `react` rules
- `./typescript/react-tsconfig.json` - React TypeScript rules based off of the `base` rules

### Usage

In your `tsconfig.json`, add the following line:

```json
{
  "extends": "@jrkienle/config/typescript/base-tsconfig.json"
}
```

**Note:** `base-tsconfig.json` can be replaced with any of the other available configuration file
names exported in this package

### Vitest

There are 2 Vitest configs to standardize testing between every app, package, and service in the
monorepo. The following Vitest configs are available:

- `./vitest/base-vitest.json` - Common Vitest Config that **every** project must use
- `./vitest/react-vitest.json` - React TypeScript rules based off of the `base` rules

### Usage

In your `vitest.config.js`, add the following lines:

```javascript
import vitestConfig from '@jrkienle/config/vitest/react-vitest.js';
export default vitestConfig;
```
