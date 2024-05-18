'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useContext } from 'react';

import { ComboboxContext } from '@/contexts';
import { cn } from '@/utils';

const ComboboxValue = ({ className, children, placeholder, ...props }, ref) => {
  const { state } = useContext(ComboboxContext);

  return (
    <Slot
      className={cn(
        'data-[placeholder]:font-normal data-[placeholder]:text-content/75',
        className
      )}
      ref={ref}
      {...props}
    >
      {state.activeValue ? (
        children ?? <span>{state.activeLabel}</span>
      ) : (
        <span data-placeholder>{placeholder}</span>
      )}
    </Slot>
  );
};

export default forwardRef(ComboboxValue);
