'use client';

import { useButton } from '@react-aria/button';
import type { AriaButtonOptions } from '@react-aria/button';
import { useRef } from 'react';
import type { ReactNode, RefObject } from 'react';

import Icon from 'components/Icon';
import { outlineFocused } from 'styles';
import { tv } from 'utils';

const buttonStyles = tv({
  base: [
    'cursor-pointer flex font-body items-center rounded-md shadow hover:shadow-md transition',
    outlineFocused,
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
  variants: {
    color: {
      primary: 'bg-orange-500 text-white hover:bg-orange-400 active:bg-orange-600',
      secondary:
        'bg-gray-900 hover:bg-gray-800 active:bg-gray-950 dark:bg-gray-100 dark:hover:bg-gray-50 dark:active:bg-gray-200',
    },
    isDisabled: {
      true: 'bg-gray-400 cursor-not-allowed hover:bg-gray-400 active:bg-gray-400 shadow-none hover:shadow-none',
    },
    isLoading: {
      true: 'cursor-wait hover:shadow',
    },
    size: {
      sm: 'px-16 py-8 text-body-sm',
      md: 'px-16 py-8 text-body-md',
      lg: 'px-24 py-16 text-body-lg',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      isLoading: true,
      className: 'bg-orange-300 hover:bg-orange-300 active:bg-orange-300',
    },
    {
      color: 'secondary',
      isLoading: true,
      className:
        'bg-gray-700 hover:bg-gray-700 active:bg-gray-700 dark:bg-gray-50 dark:hover:bg-gray-50 dark:active:bg-gray-50',
    },
  ],
});

export interface ButtonProps extends AriaButtonOptions<'button'> {
  /** Override the button's default ref. This is often used only inside react-aria */
  buttonRef?: RefObject<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  /** Controls the background and text color */
  color?: 'primary' | 'secondary';
  /** Disables interaction and shows the user that there is an async action taking place */
  isLoading?: boolean;
  /** Controls the padding and font size */
  size?: 'sm' | 'md' | 'lg';
}

/** An input usually used for a single-click action */
function Button({
  buttonRef,
  children,
  className,
  color = 'primary',
  isDisabled,
  isLoading = false,
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps) {
  const localButtonRef = useRef<HTMLButtonElement>(null);
  const ref = buttonRef || localButtonRef;
  const { buttonProps } = useButton({ ...props, isDisabled: isDisabled || isLoading, type }, ref);

  return (
    // We're explicitly providing a default type of button, but ESLint isn't smart enough to see
    // that so we have to disable this rule
    // eslint-disable-next-line react/button-has-type
    <button
      {...buttonProps}
      className={buttonStyles({
        class: className,
        color,
        isDisabled,
        isLoading,
        size,
      })}
      ref={ref}
    >
      {isLoading && (
        <span className="block mr-8">
          <Icon className="animate-spin" icon="loading" />
        </span>
      )}
      {children}
    </button>
  );
}

export default Button;
