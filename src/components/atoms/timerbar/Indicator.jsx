'use client';

import { Indicator } from '@radix-ui/react-progress';
import { forwardRef } from 'react';

import { useTimerbar } from '@/hooks';

const TimerbarIndicator = ({ style, ...props }, ref) => {
  const { activeValue, duration, updateDelay } = useTimerbar();

  return (
    <Indicator
      ref={ref}
      style={{
        '--timerbar-value': `${Math.max(100 - (activeValue / duration) * 100, 0)}%`,
        '--timerbar-delay': updateDelay,
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(TimerbarIndicator);
