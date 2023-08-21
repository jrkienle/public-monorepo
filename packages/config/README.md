# `@jrkienle/config`

Shared configuration files between all of the `@jrkienle` monorepo

## Installation

```bash
pnpm i @jrkienle/config -D
```

## Available Configurations

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

### TypeScript

I have 3 TypeScript configs to standardize type checking between every app, package, and service
in the monorepo. The following TSConfigs are available

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
