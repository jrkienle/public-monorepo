import { resolve } from 'path';
import type { Config } from 'tailwindcss';

// I'm a big believer in utilizing the 8pt grid for all design work. For more info on why I chose
// this, check out the following Medium article, there's a lot of good info in here
// https://uxplanet.org/everything-you-should-know-about-8-point-grid-system-in-ux-design-b69cb945b18d
// Unfortunately the function for creating this grid in Tailwind is a little heavy, but at least
// it's only being run at build time rather than runtime (plus it's way better than typing this all
// out manually)
export function create8PtGrid(max = 512) {
  const finalGrid: Record<string, string> = {
    auto: 'auto',
    '0': '0px',
    '1': '1px',
    '4': '4px',
  };

  let currentGridStep = 8;

  while (currentGridStep <= max) {
    finalGrid[currentGridStep.toString()] = `${currentGridStep}px`;

    currentGridStep += 8;
  }

  return finalGrid;
}

const grid = create8PtGrid();

export default {
  content: [
    resolve(process.cwd(), 'src', '**', '*.ts'),
    resolve(process.cwd(), 'src', '**', '*.tsx'),
    resolve(process.cwd(), 'node_modules', '@jrkienle', 'ui', 'dist', '**', '*.js'),
  ],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
      heading: ['Inter', 'sans-serif'],
    },
    // Rather than alphabetically like usual in this codebase, font sizes are ordered from largest
    // to smallest by weight then size. No idea why but this just makes sense to me. The font scale
    // here was generated from typescale.com with a base size of 16px and a scale of 1.333. The
    // line heights are the font size rounded up to the closest 8pt grid value. I'd like to pretend
    // there's some sort of science behind this, but I'm 100% winging it
    fontSize: {
      'heading-xl': [
        '67.34px',
        {
          lineHeight: '72px',
          fontWeight: '900',
        },
      ],
      'heading-lg': [
        '50.52px',
        {
          lineHeight: '56px',
          fontWeight: '900',
        },
      ],
      'heading-md': [
        '37.90px',
        {
          lineHeight: '40px',
          fontWeight: '900',
        },
      ],
      'heading-sm': [
        '28.43px',
        {
          lineHeight: '32px',
          fontWeight: '900',
        },
      ],
      'heading-xs': [
        '21.33px',
        {
          lineHeight: '24px',
          fontWeight: '900',
        },
      ],
      'body-lg': [
        '21.33px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'body-md': [
        '16px',
        {
          lineHeight: '24px',
          fontWeight: '400',
        },
      ],
      'body-sm': [
        '12px',
        {
          lineHeight: '16px',
          fontWeight: '400',
        },
      ],
    },
    spacing: grid,
  },
  plugins: [],
} satisfies Config;
