'use client';

import { Indicator, Root } from '@radix-ui/react-checkbox';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const Checkbox = ({ className, children, ...props }, ref) => (
  <Root
    className={cn(
      'h-4 w-4 shrink-0 rounded-sm border border-primary text-primary-content disabled:cursor-not-allowed disabled:opacity-50 data-checked:bg-primary [&_svg]:aspect-square [&_svg]:w-3.5',
      className,
    )}
    ref={ref}
    {...props}
  >
    <Indicator className='flex h-full w-full items-center justify-center rounded-inherit'>
      {children}
    </Indicator>
  </Root>
);

export default forwardRef(Checkbox);
