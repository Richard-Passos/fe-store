import { forwardRef } from 'react';

import { cn } from '@/utils';

const Input = ({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full border-b bg-main px-4 transition-colors file:border-none file:bg-transparent file:font-medium placeholder:text-muted-content focus:border-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(Input);
