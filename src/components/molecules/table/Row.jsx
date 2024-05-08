import { forwardRef } from 'react';

import { cn } from '@/utils';

const TableRow = ({ className, ...props }, ref) => {
  return (
    <tr
      className={cn(
        'border-b transition-colors hover:bg-active data-[state=selected]:bg-active',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(TableRow);
