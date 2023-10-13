import { forwardRef } from 'react';

import { cn } from '@/utils';

import Text from '../text';

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
