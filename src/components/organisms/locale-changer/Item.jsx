import { forwardRef } from 'react';

import { SelectItem } from '@/components/molecules/select';
import { cn } from '@/utils';

const LocaleChangerItem = ({ className, ...props }, ref) => {
  return (
    <SelectItem
      className={cn(
        'aspect-square w-auto px-0 first-letter:normal-case',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(LocaleChangerItem);
