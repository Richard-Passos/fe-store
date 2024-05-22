import { forwardRef } from 'react';

import { SelectTrigger } from '@/components/molecules/select';
import { cn } from '@/utils';

const LocaleChangerTrigger = ({ className, ...props }, ref) => {
  return (
    <SelectTrigger
      className={cn(
        'aspect-square w-auto px-0 first-letter:normal-case justify-center',
        className
      )}
      color='inherit'
      ref={ref}
      size='xs'
      variant='solid'
      {...props}
    />
  );
};

export default forwardRef(LocaleChangerTrigger);
