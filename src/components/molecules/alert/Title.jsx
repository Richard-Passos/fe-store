import { forwardRef } from 'react';

import { TextSubtitle } from '@/components/atoms/text';
import { cn } from '@/utils';

const AlertTitle = ({ className, ...props }, ref) => {
  return (
    <TextSubtitle
      className={cn('text-4xl/none font-semibold', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AlertTitle);
