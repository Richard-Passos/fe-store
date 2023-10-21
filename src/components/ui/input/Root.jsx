import { forwardRef } from 'react';

import { cn } from '@/utils';

const Input = ({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-sm border bg-main px-4 text-sm transition-colors file:border-none file:font-medium placeholder:text-muted-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(Input);
