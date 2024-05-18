'use client';

import { createContext, useState } from 'react';

import { useInterval } from '@/hooks';

const TIMERBAR_UPDATE_DELAY = 100;

const TimerbarContext = createContext({
  activeValue: 0,
  setActiveValue: () => {},
  duration: 0
});

const TimerbarProvider = ({ duration, isPaused, value, ...props }) => {
  const [activeValue, setActiveValue] = useState(
    duration - TIMERBAR_UPDATE_DELAY
  );

  useInterval(
    () =>
      setActiveValue((value) =>
        value > 0 ? value - TIMERBAR_UPDATE_DELAY : 0
      ),
    isPaused ? null : TIMERBAR_UPDATE_DELAY
  );

  return (
    <TimerbarContext.Provider
      value={{
        activeValue,
        duration,
        ...value
      }}
      {...props}
    />
  );
};

export default TimerbarContext;
export { TimerbarProvider, TIMERBAR_UPDATE_DELAY };
