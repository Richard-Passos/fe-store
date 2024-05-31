'use client';

import { Slot } from '@radix-ui/react-slot';
import { useCallback, useEffect, useRef } from 'react';

import { useEventListener } from '@/hooks';
import { useHeaderContext } from '@/hooks/contexts';

const OrganismsHeaderSetState = (props) => {
  const ref = useRef(null),
    { setHeight } = useHeaderContext();

  const handleSetHeight = useCallback(
    (resetValue) => {
      const { height } = ref.current?.getBoundingClientRect() || {};

      setHeight(resetValue ?? height);
    },
    [setHeight]
  );

  useEventListener('resize', handleSetHeight);

  useEffect(() => {
    handleSetHeight();

    return () => handleSetHeight(0);
  }, [handleSetHeight]);

  return (
    <Slot
      ref={ref}
      {...props}
    />
  );
};

export default OrganismsHeaderSetState;
