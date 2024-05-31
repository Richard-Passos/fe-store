'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useToggleContext } from '@/hooks/contexts';
import { cn } from '@/utils';

const MoleculesLocaleToggleItem = (
  { value, asChild, className, ...props },
  ref
) => {
  const { nextValue } = useToggleContext();

  const Tag = asChild ? Slot : 'div',
    isActive = value === nextValue;

  return (
    <Tag
      aria-hidden={!isActive}
      className={cn(
        'absolute data-inactive:pointer-events-none data-inactive:invisible',
        className
      )}
      data-state={isActive ? 'active' : 'inactive'}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesLocaleToggleItem);
