'use client';

import { useContext } from 'react';

import { TimerbarContext } from '@/contexts';

const useTimerbar = () => {
  const context = useContext(TimerbarContext);

  handleErrors(context);

  return context;
};

const handleErrors = (context) => {
  const errors = {
    id: 'useTimerbar must be within Timerbar.'
  };

  Object.entries(context).forEach(([key, value]) => {
    const errorMessage = errors[key];

    if (errorMessage && !value) throw new Error(errorMessage);
  });
};

export default useTimerbar;
