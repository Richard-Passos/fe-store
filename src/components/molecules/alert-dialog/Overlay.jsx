'use client';

import { Overlay } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { alertDialogOverlay } from './variants';

const AlertDialogOverlay = ({ color, className, ...props }, ref) => {
  return (
    <Overlay
      className={alertDialogOverlay({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogOverlay);
