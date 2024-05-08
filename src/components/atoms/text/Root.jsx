import { cn } from '@/utils';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const Text = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'p';

  return (
    <Tag
    className={cn('first-letter:uppercase', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Text);
