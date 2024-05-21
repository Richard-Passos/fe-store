'use client';

import { Root } from '@radix-ui/react-progress';
import { forwardRef } from 'react';

import { ProgressProvider } from '@/contexts';

const ProgressRoot = forwardRef(({ activeValue, ...props }, ref) => {
  return (
    <Root
      ref={ref}
      value={activeValue}
      {...props}
    />
  );
});
ProgressRoot.displayName = 'ProgressRoot';

const ProgressRootWithProvider = (
  { activeValue, min, max, value, ...props },
  ref
) => {
  return (
    <ProgressProvider value={{ activeValue, min, max, ...value }}>
      <ProgressRoot
        activeValue={activeValue}
        max={max}
        min={min}
        ref={ref}
        {...props}
      />
    </ProgressProvider>
  );
};

export default forwardRef(ProgressRootWithProvider);
