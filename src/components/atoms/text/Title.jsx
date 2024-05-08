import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const TextTitle = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'h2';

  return (
    <Tag
      className={cn(
        'text-5xl/none font-bold tracking-tight first-letter:uppercase [&_:is(b,i)]:font-bold [&_b]:text-primary',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TextTitle);
