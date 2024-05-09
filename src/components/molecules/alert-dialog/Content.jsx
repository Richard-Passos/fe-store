'use client';

import { Content } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { alertDialogContentVariants } from './variants';

const AlertDialogContent = ({ color, className, ...props }, ref) => {
  return (
    <Content
      className={alertDialogContentVariants({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDialogContent);
