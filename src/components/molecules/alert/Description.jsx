import { forwardRef } from 'react';

import { TextDescription } from '@/components/atoms/text';
import { cn } from '@/utils';

const AlertDescription = ({ className, ...props }, ref) => {
  return (
    <TextDescription
      className={cn('text-sm', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDescription);
