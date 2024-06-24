'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

import { normId } from '@/utils';

const useQueryString = (querys = {}) => {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(querys).forEach(([key, value]) =>
      params.set(normId(key), value)
    );

    return params.toString();
  }, [querys, searchParams]);

  return `?${createQueryString()}`;
};

export default useQueryString;
