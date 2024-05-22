import { forwardRef } from 'react';

import { SelectContent } from '@/components/molecules/select';
import { cn } from '@/utils';

const LocaleChangerContent = ({ className, ...props }, ref) => {
  return (
    <SelectContent
      className={cn('min-w-0', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(LocaleChangerContent);
