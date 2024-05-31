'use client';

import { useCallback } from 'react';

import { useDispatch, useSelector } from '@/store';
import { setHeight } from '@/store/slices/header';

const useHeaderContext = () => {
  const context = useSelector((data) => data.header),
    dispatch = useDispatch();

  const handleSetHeight = useCallback(
    (height) => dispatch(setHeight(height)),
    [dispatch]
  );

  return {
    ...context,
    setHeight: handleSetHeight
  };
};

export default useHeaderContext;
