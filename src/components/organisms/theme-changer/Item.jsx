import { forwardRef } from 'react';

import { SelectItem } from '@/components/molecules/select';
import { cn } from '@/utils';

const ThemeChangerItem = ({ className, ...props }, ref) => {
  return (
    <SelectItem
      className={cn(
        'aspect-square w-auto px-0',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ThemeChangerItem);
