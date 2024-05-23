import { forwardRef } from 'react';

import { AvatarFallback } from '@/components/atoms/avatar';
import { cn } from '@/utils';

const MoleculeAvatarFallback = ({ className, ...props }, ref) => {
  return (
    <AvatarFallback
      className={cn('flex size-full items-center justify-center', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAvatarFallback);
