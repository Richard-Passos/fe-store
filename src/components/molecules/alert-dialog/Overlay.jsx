import { forwardRef } from 'react';

import { AlertDialogOverlay } from '@/components/atoms/alert-dialog';
import { overlay } from '@/components/atoms/overlay';

const MoleculeAlertDialogOverlay = ({ color, className, ...props }, ref) => {
  return (
    <AlertDialogOverlay
      className={overlay({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertDialogOverlay);
