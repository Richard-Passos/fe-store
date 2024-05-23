import { forwardRef } from 'react';

import { AlertDialogContent } from '@/components/atoms/alert-dialog';
import box from '@/components/atoms/box/variants';
import { cn } from '@/utils';

const MoleculeAlertDialogContent = ({ color, className, ...props }, ref) => {
  return (
    <AlertDialogContent
      className={box({
        color,
        className: cn(
          'fixed left-1/2 top-1/2 z-50 max-h-svh w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-md overflow-y-auto shadow-lg data-closed:animate-out data-closed:fade-out data-closed:zoom-out-95 data-closed:slide-out-to-left-1/2 data-closed:slide-out-to-top-[48%] data-open:animate-in data-open:fade-in data-open:zoom-in-95 data-open:slide-in-from-left-1/2 data-open:slide-in-from-top-[48%]',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertDialogContent);
