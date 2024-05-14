import { forwardRef } from 'react';

import control from '@/components/controlVariants';
import { cn } from '@/utils';

const Input = ({ color, variant, className, ...props }, ref) => {
  return (
    <input
      className={control({
        color,
        variant,
        className: cn(
          'file:mr-2 file:mt-2 file:cursor-pointer file:border-0 file:bg-transparent file:px-0 file:font-medium file:text-content disabled:cursor-not-allowed disabled:opacity-50 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:border-0 [&[variant=color]]:overflow-hidden [&[variant=color]]:px-0 [&[variant=file]]:text-content/75',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Input);
