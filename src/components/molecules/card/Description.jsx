import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { cn } from '@/utils';

const CardDescription = ({ className, ...props }, ref) => {
  return (
    <TextDescription
      className={cn('text-sm/relaxed', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardDescription);
