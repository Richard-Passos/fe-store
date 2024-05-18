'use client';

import { forwardRef } from 'react';

import { useComboboxItem } from '@/hooks';
import { cn } from '@/utils';

const ComboboxItemIndicator = (
  { className, forceMount, children, ...props },
  ref
) => {
  const { isChecked } = useComboboxItem();

  return (
    <div
      className={cn('size-4', className)}
      data-item-indicator
      data-state={isChecked ? 'checked' : 'unchecked'}
      ref={ref}
      {...props}
    >
      {(forceMount || isChecked) && children}
    </div>
  );
};

export default forwardRef(ComboboxItemIndicator);
