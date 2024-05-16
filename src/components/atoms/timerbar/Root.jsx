'use client';

import { Root } from '@radix-ui/react-progress';
import { forwardRef, useState } from 'react';

import { TimerbarProvider } from '@/contexts';
import { useTimer } from '@/hooks';

import variants from './variants';

const TIMERBAR_UPDATE_DELAY = 100;

const Timerbar = (
  { isPaused, duration = 5000, color, size, className, ...props },
  ref
) => {
  const [value, setValue] = useState(duration - TIMERBAR_UPDATE_DELAY);

  const handleSetValue = () =>
    setValue((value) => (value > 0 ? value - TIMERBAR_UPDATE_DELAY : 0));

  useTimer(isPaused, handleSetValue, duration - TIMERBAR_UPDATE_DELAY);

  return (
    <TimerbarProvider value={{ value, duration }}>
      <Root
        className={variants({ color, size, className })}
        max={duration}
        min={0}
        ref={ref}
        value={value}
        {...props}
      />
    </TimerbarProvider>
  );
};

export default forwardRef(Timerbar);
export { TIMERBAR_UPDATE_DELAY };
