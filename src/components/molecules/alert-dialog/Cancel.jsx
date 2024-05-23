import { forwardRef } from 'react';

import { AlertDialogCancel } from '@/components/atoms/alert-dialog';
import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const MoleculeAlertDialogCancel = (
  { color, variant, size, className, ...props },
  ref
) => {
  return (
    <AlertDialogCancel
      className={button({
        color,
        variant,
        size,
        className: cn('max-sm:w-full', className)
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertDialogCancel);
