import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Textarea = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'textarea';

  return (
    <Tag
      className={cn('resize-none', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Textarea);
