'use client';

import { Indicator } from '@radix-ui/react-progress';
import { forwardRef } from 'react';

import { useProgress } from '@/hooks';

const ProgressIndicator = ({ style, ...props }, ref) => {
  const { value, min, max } = useProgress();

  return (
    <Indicator
      ref={ref}
      style={{
        '--progress-value': `${Math.max(100 - (value / max) * 100, min)}%`,
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(ProgressIndicator);
