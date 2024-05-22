'use client';

import { useEffect, useState } from 'react';

const useIsMounted = (defaultValue = false) => {
  const [isMounted, setIsMounted] = useState(defaultValue);

  useEffect(() => {
    setIsMounted(true);

    return () => setIsMounted(false);
  }, []);

  return { isMounted, setIsMounted };
};

export default useIsMounted;
