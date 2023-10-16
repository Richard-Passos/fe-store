import { cn } from '@/utils';
import { forwardRef } from 'react';

const Input = ({ className, type, ...props }, ref) => {
  return (
    <input
      className={cn(
        'flex h-10 w-full rounded-md border bg-main px-4 text-sm file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-content disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      type={type}
      {...props}
    />
  );
}
export default forwardRef(Input);