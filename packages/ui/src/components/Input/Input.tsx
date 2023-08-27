'use client';

import { useTextField } from '@react-aria/textfield';
import type { AriaTextFieldProps } from '@react-aria/textfield';
import { useRef } from 'react';
import type { RefObject } from 'react';

import FieldDescription from 'components/FieldDescription';
import FieldLabel from 'components/FieldLabel';
import { borderError, outlineFocused } from 'styles';
import { tv } from 'utils';

const inputStyles = tv({
  defaultVariants: {
    size: 'md',
  },
  slots: {
    base: 'flex flex-col mb-8 w-full',
    input: [
      'bg-white border border-solid border-zinc-100 h-40 text-zinc-900 rounded-md shadow transition hover:border-zinc-200 dark:bg-zinc-800 dark:border-zinc-600 dark:text-white dark:hover:border-zinc-500 w-full',
      outlineFocused,
    ],
  },
  variants: {
    isError: {
      true: {
        input: borderError,
      },
    },
    size: {
      sm: {
        input: 'px-16 py-8 text-body-sm',
      },
      md: {
        input: 'px-16 py-8 text-body-md',
      },
      lg: {
        input: 'px-24 py-16 text-body-lg',
      },
    },
  },
});

export interface InputProps extends Omit<AriaTextFieldProps, 'label' | 'name'> {
  inputRef?: RefObject<HTMLInputElement>;
  label: string;
  name: string;
  size: 'sm' | 'md' | 'lg';
}

function Input({ inputRef, label, size, ...props }: InputProps) {
  const localInputRef = useRef<HTMLInputElement>(null);
  const ref = inputRef || localInputRef;
  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField(
    { ...props, label },
    ref
  );
  const inputId = `input-${props.name}`;

  const { base: baseStyles, input: inputElStyles } = inputStyles({
    isError: !!props.errorMessage,
    size,
  });

  return (
    <div className={baseStyles()}>
      <FieldLabel {...labelProps} inputId={inputId}>
        {label}
      </FieldLabel>
      <input {...inputProps} className={inputElStyles()} id={inputId} ref={ref} />
      <FieldDescription
        {...{ ...descriptionProps, ...errorMessageProps }}
        description={props.description}
        errorMessage={props.errorMessage}
      />
    </div>
  );
}

export default Input;
