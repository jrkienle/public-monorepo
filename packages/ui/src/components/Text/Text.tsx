import { createElement } from 'react';
import type { ReactNode } from 'react';

import { foreground } from 'styles';
import { tv } from 'utils';

const textStyles = tv({
  variants: {
    color: {
      default: foreground,
      primary: 'text-orange-500',
    },
    size: {
      'body-lg': 'font-body text-body-lg',
      'body-md': 'font-body text-body-md',
      'body-sm': 'font-body text-body-sm',
      'heading-lg': 'font-heading text-heading-lg',
      'heading-md': 'font-heading text-heading-md',
      'heading-sm': 'font-heading text-heading-sm',
      'heading-xl': 'font-heading text-heading-xl',
      'heading-xs': 'font-heading text-heading-xs',
    },
  },
});

export interface TextProps extends Partial<Omit<HTMLElement, 'children'>> {
  children: ReactNode;
  /** Controls the font color */
  color?: 'default' | 'primary';
  /** Controls the underlying element the text is displayed in, this is required for a11y */
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div' | 'a';
  /** Controls the font size, font weight, and line height */
  size?:
    | 'body-lg'
    | 'body-md'
    | 'body-sm'
    | 'heading-lg'
    | 'heading-md'
    | 'heading-sm'
    | 'heading-xl'
    | 'heading-xs';
}

/** Renders preset text styles with a customizable base element */
function Text({ children, color = 'default', el = 'span', size = 'body-md', ...props }: TextProps) {
  // I'm leveraging the low-level React API here to dynamically create the appropriate HTML element
  // based off of the user's needs. TODO: Should I add i18n to this for fun?
  return createElement(
    el,
    { ...props, className: textStyles({ class: props.className, color, size }) },
    children
  );
}

export default Text;
