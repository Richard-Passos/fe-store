import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MoleculeAlertHeader = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'header';

  return (
    <Tag
      className={cn('flex flex-col gap-xs', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertHeader);
