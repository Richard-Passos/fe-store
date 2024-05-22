import { forwardRef } from 'react';

import { SelectTrigger } from '@/components/molecules/select';
import { cn } from '@/utils';

const ThemeChangerTrigger = ({ className, ...props }, ref) => {
  return (
    <SelectTrigger
      className={cn('aspect-square w-auto px-0', className)}
      color='inherit'
      ref={ref}
      size='xs'
      variant='solid'
      {...props}
    />
  );
};

export default forwardRef(ThemeChangerTrigger);
