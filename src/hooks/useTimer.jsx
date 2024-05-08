'use client';

import { useCallback, useEffect, useRef } from 'react';

const USE_TIMER_UPDATE_DELAY = 100;

const useTimer = (isPaused, cb, duration = 5000) => {
  const timerPauseNumber = useRef(duration);

  const resetTimer = useCallback(
    () => (timerPauseNumber.current = duration),
    [timerPauseNumber, duration],
  );

  useEffect(() => {
    if (!isPaused) {
      const id = setInterval(
        () => {
          cb();
          resetTimer();
        },
        timerPauseNumber.current < duration
          ? timerPauseNumber.current
          : duration,
      );

      const timerNumberId = setInterval(
        () => (timerPauseNumber.current -= USE_TIMER_UPDATE_DELAY),
        USE_TIMER_UPDATE_DELAY,
      );

      return () => {
        clearInterval(timerNumberId);
        clearInterval(id);
      };
    }
  }, [isPaused, cb, resetTimer, duration]);

  return resetTimer;
};

export default useTimer;
export { USE_TIMER_UPDATE_DELAY };
