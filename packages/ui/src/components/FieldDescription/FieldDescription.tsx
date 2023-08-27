import type { HTMLAttributes, ReactNode } from 'react';

import Text from 'components/Text';
import { tv } from 'utils';

/** A helper component used to show accessible error or description messages below an input */
export interface FieldDescriptionProps extends Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  description?: ReactNode;
  errorMessage?: ReactNode;
}

const fieldDescriptionStyles = tv({
  base: 'mt-8',
  variants: {
    isError: {
      true: 'text-red-500 dark:text-red-500',
    },
  },
});

function FieldDescription({ description, errorMessage, ...props }: FieldDescriptionProps) {
  // Don't show a message if we have neither a description nor an error
  if (!errorMessage && !description) {
    return null;
  }
  return (
    <Text
      {...props}
      className={fieldDescriptionStyles({ isError: !!errorMessage })}
      el="div"
      size="body-sm"
    >
      {/* Show either the error or the description, prioritizing the error */}
      {errorMessage || description}
    </Text>
  );
}

export default FieldDescription;
