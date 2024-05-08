'use client';

import { createContext } from 'react';

const TimerbarContext = createContext({ value: 0, duration: 0 });

const TimerbarProvider = (props) => {
  return <TimerbarContext.Provider {...props} />;
};

export default TimerbarContext;
export { TimerbarProvider };
