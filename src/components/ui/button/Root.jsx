import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn, cnv } from '@/utils';

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
  base: 'inline-flex items-center justify-center rounded-lg border border-transparent font-medium transition-colors',
  variants: {
    color: {
      primary: '[--base:--primary] [--content:--primary-c]',
      secondary: '[--base:--secondary] [--content:--secondary-c]',
      danger: '[--base:--danger] [--content:--danger-c]',
      base: '[--base:--base] [--content:--content]',
    },
    variant: {
      filled: 'bg-base text-content hover:bg-base/80',
      outline: 'border-base text-base hover:bg-base hover:text-content',
      ghost: 'text-base hover:bg-base/20 hover:text-content',
      link: 'text-base font-bold underline-offset-4 hover:underline',
      disabled: 'opacity-50',
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
