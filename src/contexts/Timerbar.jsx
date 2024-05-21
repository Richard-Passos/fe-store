'use client';

import { createContext, useId, useState } from 'react';

import { useInterval } from '@/hooks';

const TimerbarContext = createContext({
  id: '',
  activeValue: 0,
  setActiveValue: () => {},
  duration: 0,
  updateDelay: 0
});

const TimerbarProvider = ({
  duration = 5000,
  updateDelay = 100,
  isPaused,
  value,
  ...props
}) => {
  const [activeValue, setActiveValue] = useState(duration - updateDelay),
    id = useId();

  useInterval(
    () => setActiveValue((value) => (value > 0 ? value - updateDelay : 0)),
    isPaused ? null : updateDelay
  );

  return (
    <TimerbarContext.Provider
      value={{
        id,
        activeValue,
        setActiveValue,
        duration,
        updateDelay,
        ...value
      }}
      {...props}
    />
  );
};

export default TimerbarContext;
export { TimerbarProvider };
