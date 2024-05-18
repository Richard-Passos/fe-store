'use client';

import { forwardRef, useContext } from 'react';

import control from '@/components/controlVariants';
import { ComboboxContext } from '@/contexts';
import { cn } from '@/utils';

const ComboboxTrigger = ({ color, size, className, ...props }, ref) => {
  const { state } = useContext(ComboboxContext);

  return (
    <button
      aria-expanded={state.isOpen}
      className={control({
        color,
        size,
        className: cn('data-open:outline', className)
      })}
      data-state={state.isOpen ? 'open' : 'closed'}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ComboboxTrigger);
