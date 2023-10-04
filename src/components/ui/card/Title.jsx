import { forwardRef } from 'react';

import { cn } from '@/utils';
import { Slot } from '@radix-ui/react-slot';

const CardTitle = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h3'
  
  return (
    <Tag
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardTitle);
