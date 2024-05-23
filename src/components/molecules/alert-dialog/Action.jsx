import { forwardRef } from 'react';

import { AlertDialogAction } from '@/components/atoms/alert-dialog';
import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const MoleculeAlertDialogAction = (
  { color, variant, size, className, ...props },
  ref
) => {
  return (
    <AlertDialogAction
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

export default forwardRef(MoleculeAlertDialogAction);
