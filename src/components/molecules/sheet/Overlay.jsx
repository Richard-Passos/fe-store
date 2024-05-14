'use client';

import { Overlay } from '@radix-ui/react-dialog';
import { forwardRef } from 'react';

import { sheetOverlay } from './variants';

const SheetOverlay = ({ color, className, ...props }, ref) => {
  return (
    <Overlay
      className={sheetOverlay({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetOverlay);
