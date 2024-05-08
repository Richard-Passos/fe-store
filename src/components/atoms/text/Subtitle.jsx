import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextSubtitle = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h3';

  return (
    <Tag
      className={cn('text-2xl/none tracking-tight font-semibold first-letter:uppercase', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextSubtitle);
