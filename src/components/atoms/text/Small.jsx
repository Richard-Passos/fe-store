import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextSmall = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'small';

  return (
    <Tag
      className={cn(
        'text-xs text-content/75 first-letter:uppercase',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextSmall);
