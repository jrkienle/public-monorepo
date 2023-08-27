import type { LabelHTMLAttributes, ReactNode } from 'react';

import { textStyles } from 'components/Text';

export interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  inputId: string;
}

/** A helper component used show an accessible label above an input  */
function FieldLabel({ children, inputId, ...props }: FieldLabelProps) {
  return (
    <label
      {...props}
      className={textStyles({ color: 'default', className: ['block mb-8', props.className] })}
      htmlFor={inputId}
    >
      {children}
    </label>
  );
}

export default FieldLabel;
