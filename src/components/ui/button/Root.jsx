import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

import variantsColor from '../variantsColor';

const Button = ({ asChild, variants, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      className={cn(buttonVariants(variants), className)}
      ref={ref}
      {...props}
    />
  );
};

const buttonVariants = cnv({
  base: 'inline-flex items-center justify-center rounded-lg border border-transparent font-medium transition-all active:scale-[.98] disabled:pointer-events-none disabled:opacity-50',
  variants: {
    color: variantsColor,
    variant: {
      filled: 'bg-main hover:bg-main/80 text-content',
      outline: 'border-main text-main hover:bg-main hover:text-content',
      ghost: 'text-main hover:bg-main/20',
      link: 'text-main font-bold underline-offset-4 hover:underline',
    },
    size: {
      sm: 'h-10 px-4 text-sm',
      md: 'h-12 px-6',
      lg: 'h-14 px-8 text-lg',
    },
  },
  defaultVariants: {
    color: 'primary',
    variant: 'filled',
    size: 'md',
  },
});

export default forwardRef(Button);
export { buttonVariants };
