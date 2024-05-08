'use client'

import { forwardRef, useContext } from 'react';

import { cn } from '@/utils';

import { Indicator } from '@radix-ui/react-progress';
import { TimerbarContext } from '@/contexts';
import { TIMERBAR_UPDATE_DELAY } from './Root';

const TimerbarIndicator = ({ className, style, ...props }, ref) => {
  const { value, duration } = useContext(TimerbarContext);

  return (
    <Indicator
    className={cn(
      'size-full translate-x-[--x] ease-linear bg-main transition-transform',
      className,
    )}      ref={ref}
      style={{ 
        '--x': `-${Math.max(100 - (value / duration) * 100, 0)}%`,
        transitionDuration: TIMERBAR_UPDATE_DELAY, 
        ...style 
      }}
      {...props}
    />
  );
};

export default forwardRef(TimerbarIndicator);
