import { forwardRef } from 'react';

import { AlertDialogActions } from '@/components/atoms/alert-dialog';
import { cn } from '@/utils';

const MoleculeAlertDialogActions = ({ className, ...props }, ref) => {
  return (
    <AlertDialogActions
      className={cn(
        'flex gap-xs max-sm:flex-col-reverse sm:justify-end',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertDialogActions);
