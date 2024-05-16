'use client';

import { Root } from '@radix-ui/react-progress';
import { forwardRef, useContext } from 'react';

import { TimerbarContext, TimerbarProvider } from '@/contexts';

import timerbar from './variants';

const Timerbar = forwardRef(({ color, size, className, ...props }, ref) => {
  const { activeValue, duration } = useContext(TimerbarContext);

  return (
    <Root
      className={timerbar({ color, size, className })}
      max={duration}
      min={0}
      ref={ref}
      value={activeValue}
      {...props}
    />
  );
});
Timerbar.displayName = 'Timerbar';

const TimerbarWithProvider = ({ duration, isPaused, value, ...props }, ref) => {
  return (
    <TimerbarProvider
      duration={duration ?? 5000}
      isPaused={isPaused}
      value={value}
    >
      <Timerbar
        ref={ref}
        {...props}
      />
    </TimerbarProvider>
  );
};

export default forwardRef(TimerbarWithProvider);
