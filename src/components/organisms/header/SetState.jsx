'use client';

import { Slot } from '@radix-ui/react-slot';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { useEventListener } from '@/hooks';
import { setHeaderHeight } from '@/redux';

const HeaderSetState = (props) => {
  const ref = useRef(null),
    dispatch = useDispatch();

  const handleSetHeight = useCallback(() => {
    const { height } = ref.current.getBoundingClientRect();

    dispatch(setHeaderHeight(height));
  }, [dispatch]);

  useEventListener('resize', handleSetHeight);

  useEffect(() => {
    handleSetHeight();
  }, [handleSetHeight]);

  return (
    <Slot
      ref={ref}
      {...props}
    />
  );
};

export default HeaderSetState;
