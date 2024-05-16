'use client';

import { Indicator } from '@radix-ui/react-progress';
import { forwardRef, useContext } from 'react';

import { TimerbarContext } from '@/contexts';
import { TIMERBAR_UPDATE_DELAY } from '@/contexts/Timerbar';
import { cn } from '@/utils';

const TimerbarIndicator = ({ className, style, ...props }, ref) => {
  const { activeValue, duration } = useContext(TimerbarContext);

  return (
    <Indicator
      className={cn(
        'size-full translate-x-[--x] bg-main transition-transform ease-linear',
        className
      )}
      ref={ref}
      style={{
        '--x': `-${Math.max(100 - (activeValue / duration) * 100, 0)}%`,
        transitionDuration: TIMERBAR_UPDATE_DELAY,
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(TimerbarIndicator);
