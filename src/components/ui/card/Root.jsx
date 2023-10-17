import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Card = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'article';

  return (
    <Tag
      className={cn(
        'space-y-6 rounded-md bg-muted p-6 text-content shadow-sm',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Card);
