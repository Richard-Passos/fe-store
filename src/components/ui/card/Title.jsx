import { forwardRef } from 'react';

import Text from '@/components/ui/text';
import { cn } from '@/utils';

const CardTitle = ({ asChild, className, children, ...props }, ref) => {
  return (
    <Text.Title
      asChild
      className={cn(
        'text-2xl font-semibold leading-none tracking-tight',
        className,
      )}
      ref={ref}
      {...props}
    >
      {asChild ? children : <h3>{children}</h3>}
    </Text.Title>
  );
};

export default forwardRef(CardTitle);
