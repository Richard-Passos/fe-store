import { forwardRef } from 'react';

import { AlertDialogDescription } from '@/components/atoms/alert-dialog';
import { text } from '@/components/atoms/text';
import { cn } from '@/utils';

const MoleculeAlertDialogDescription = (
  { variant = 'p', className, ...props },
  ref
) => {
  return (
    <AlertDialogDescription
      className={text({ variant, className: cn('text-sm', className) })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertDialogDescription);
