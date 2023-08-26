import { tv as unwrappedTv } from 'tailwind-variants';
import type { TV } from 'tailwind-variants';

export const tv: TV = (params) =>
  unwrappedTv(params, {
    twMergeConfig: {
      theme: {
        fontSize: [
          {
            text: [
              'body-lg',
              'body-md',
              'body-sm',
              'heading-lg',
              'heading-md',
              'heading-sm',
              'heading-xl',
              'heading-xs',
            ],
          },
        ],
      },
      classGroups: {
        text: [
          {
            text: [
              'body-lg',
              'body-md',
              'body-sm',
              'heading-lg',
              'heading-md',
              'heading-sm',
              'heading-xl',
              'heading-xs',
            ],
          },
        ],
      },
    },
  });
