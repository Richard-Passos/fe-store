'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';

import { useEventListener, useHeadroom } from '@/hooks';
import { useHeaderContext } from '@/hooks/contexts';
import { setRefs } from '@/utils';

const OrganismsHeaderSetState = (props, ref) => {
  const innerRef = useRef(null),
    [isFix, setIsFix] = useState(true),
    { setHeight, setIsVisible } = useHeaderContext();

  const pinned = useHeadroom({
    fixedAt: 0,
    onFix: () => setIsFix(true),
    onRelease: () => setIsFix(false)
  });

  const handleSetHeight = useCallback(
    (resetValue) => {
      const { current } = innerRef;

      if (current) {
        const { height } = current.getBoundingClientRect();

        setHeight(resetValue ?? height);
      }
    },
    [setHeight]
  );

  useEventListener('resize', handleSetHeight);

  useEffect(() => {
    handleSetHeight();

    return () => handleSetHeight(0);
  }, [handleSetHeight]);

  useEffect(() => {
    setIsVisible(pinned);

    return () => setIsVisible(false);
  }, [setIsVisible, pinned]);

  return (
    <Slot
      data-is-fix={isFix}
      data-is-visible={pinned}
      ref={setRefs(ref, innerRef)}
      {...props}
    />
  );
};

export default forwardRef(OrganismsHeaderSetState);
