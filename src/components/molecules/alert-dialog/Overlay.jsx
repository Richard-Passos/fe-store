'use client';

import { Overlay } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { alertDialogOverlayVariants } from './variants';

const AlertDialogOverlay = ({ color, className, ...props }, ref) => {
  return (
    <Overlay
      className={alertDialogOverlayVariants({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogOverlay);
