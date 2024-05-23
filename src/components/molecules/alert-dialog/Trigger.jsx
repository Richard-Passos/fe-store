import { forwardRef } from 'react';

import { AlertDialogTrigger } from '@/components/atoms/alert-dialog';
import { button } from '@/components/atoms/button';

const MoleculeAlertDialogTrigger = (
  { color, variant, size, className, ...props },
  ref
) => {
  return (
    <AlertDialogTrigger
      className={button({
        color,
        variant,
        size,
        className
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertDialogTrigger);
