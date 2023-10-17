import { forwardRef } from 'react';

import { cn } from '@/utils';

const Input = ({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full bg-main px-4 shadow-[0_1px_0_hsl(var(--tw-shadow-color))] shadow-muted-content/50 transition-shadow file:bg-transparent file:font-medium placeholder:text-muted-content focus:shadow-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(Input);
