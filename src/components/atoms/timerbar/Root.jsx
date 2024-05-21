'use client';

import { Root } from '@radix-ui/react-progress';
import { forwardRef } from 'react';

import { TimerbarProvider } from '@/contexts';
import { useTimerbar } from '@/hooks';

const TimerbarRoot = forwardRef((props, ref) => {
  const { activeValue, duration } = useTimerbar();

  return (
    <Root
      max={duration}
      min={0}
      ref={ref}
      value={activeValue}
      {...props}
    />
  );
});
TimerbarRoot.displayName = 'TimerbarRoot';

const TimerbarRootWithProvider = (
  { duration, isPaused, value, ...props },
  ref
) => {
  return (
    <TimerbarProvider
      duration={duration}
      isPaused={isPaused}
      value={value}
    >
      <TimerbarRoot
        ref={ref}
        {...props}
      />
    </TimerbarProvider>
  );
};

export default forwardRef(TimerbarRootWithProvider);
