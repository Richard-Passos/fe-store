import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextDescription = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
      className={cn(
        'leading-relaxed text-content text-opacity-75 first-letter:uppercase',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextDescription);
