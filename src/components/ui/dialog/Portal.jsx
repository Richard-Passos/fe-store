'use client';

import { Portal } from '@radix-ui/react-dialog';

import { cn } from '@/utils';

const DialogPortal = ({ className, ...props }) => {
  return (
    <Portal
      className={cn(className)}
      {...props}
    />
  );
};

export default DialogPortal;
