import { forwardRef } from 'react';

import { cn } from '@/utils';

const Shortcut = ({ className, ...props }, ref) => {
  return (
    <span
      className={cn('text-xs tracking-widest text-content/75', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Shortcut);
