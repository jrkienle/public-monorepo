import glob from 'fast-glob';
import { defineConfig } from 'tsup';
import tsupConfig from '@jrkienle/config/tsup/react-tsup.js';

// This Tsup config has to deviate from our standard Tsup config in a few places. Let's go over
// how and why this needs to be done. When building a component library, it's reasonable to assume
// that not every app will import every single component. Unfortunately, when bundling a library
// every single dependency also gets bundled. Fortunately there's a solution: create a separate
// bundle for each component and serve them from an unbundled index file. That's what this config
// does. Additionally it creates bundles for any utilities and our Tailwind config

export default defineConfig(async (options) => {
  // Get every index.ts in components. These will act like each component's bundle entrypoint
  const componentEntryPoints = await glob('./src/components/*/index.ts');
  const componentBundles = componentEntryPoints.map((fileName) => ({
    ...tsupConfig,
    dts: false, // We only want to generate typings from the final index to improve speed
    entry: [fileName],
    // Prepends "use client" to the component entry point to make this compatible with Next.js
    esbuildOptions: (options) => {
      options.banner = {
        js: '"use client";',
      };
    },
    outDir: fileName.split('/index.ts')[0].replace('./src', 'dist'),
    // We have to disable rollup tree shaking here as it gets rid of our "use client" directives
    treeshake: false,
    watch: options.watch ?? false,
  }));

  const tailwindBundle = {
    ...tsupConfig,
    clean: false,
    dts: false,
    entry: ['./src/tailwindConfig.ts'],
    watch: options.watch ?? false,
  };

  const indexBundle = {
    ...tsupConfig,
    bundle: false,
    clean: false,
    entry: ['./src/index.ts'],
    external: ['react'],
  };

  return [...componentBundles, tailwindBundle, indexBundle];
});
