import { forwardRef } from 'react';

import { AvatarRoot } from '@/components/atoms/avatar';
import { cn } from '@/utils';

const MoleculeAvatarRoot = ({ className, ...props }, ref) => {
  return (
    <AvatarRoot
      className={cn(
        'size-10 overflow-hidden rounded-full border bg-muted',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAvatarRoot);
