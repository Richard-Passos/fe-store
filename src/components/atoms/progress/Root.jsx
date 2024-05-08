'use client';

import { Root } from '@radix-ui/react-progress';
import { forwardRef } from 'react';

import { ProgressContext } from '@/contexts';
import variants from './variants';

const Progress = (
  { value = 0, min = 0, max = 100, color, size, className, ...props },
  ref,
) => {
  return (
    <ProgressContext.Provider value={{ value, min, max }}>
      <Root
        className={variants({ color, size, className })}
        max={max}
      min={min}
      ref={ref}
      value={value}
        {...props}
      />
    </ProgressContext.Provider>
  );
};

export default forwardRef(Progress);
