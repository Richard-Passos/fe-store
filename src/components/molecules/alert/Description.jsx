import { forwardRef } from 'react';

import { cn } from '@/utils';

import { TextDescription } from '@/components/atoms/text';

const AlertDescription = ({ className, ...props }, ref) => {
  return (
    <TextDescription
      className={cn('text-sm leading-relaxed', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertDescription);
