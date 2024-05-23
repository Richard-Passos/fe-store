import { forwardRef } from 'react';

import { AlertDialogTitle } from '@/components/atoms/alert-dialog';
import { heading } from '@/components/atoms/heading';

const MoleculeAlertDialogTitle = (
  { variant = 'h3', className, ...props },
  ref
) => (
  <AlertDialogTitle
    className={heading({
      variant,
      className
    })}
    ref={ref}
    {...props}
  />
);

export default forwardRef(MoleculeAlertDialogTitle);
