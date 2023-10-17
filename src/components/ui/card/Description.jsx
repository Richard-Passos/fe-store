import { forwardRef } from 'react';

import Text from '@/components/ui/text';
import { cn } from '@/utils';

const CardDescription = ({ className, ...props }, ref) => {
  return (
    <Text
      className={cn('text-sm text-muted-content', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CardDescription);
