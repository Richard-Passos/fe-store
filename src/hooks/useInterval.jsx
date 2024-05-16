'use client';

import { useEffect, useRef } from 'react';

const useInterval = (cb, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = cb;
  }, [cb]);

  useEffect(() => {
    const tick = () => savedCallback.current();

    if (delay) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
