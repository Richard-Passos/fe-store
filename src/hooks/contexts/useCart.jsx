'use client';

import { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from '@/store';
import { add, remove, update } from '@/store/slices/cart';
import { cart } from '@/utils';

const useCartContext = () => {
  const { items, ...context } = useSelector((data) => data.cart),
    dispatch = useDispatch();

  const handleAdd = useCallback((item) => dispatch(add(item)), [dispatch]),
    handleRemove = useCallback((item) => dispatch(remove(item)), [dispatch]),
    handleUpdate = useCallback((item) => dispatch(update(item)), [dispatch]);

  useEffect(() => {
    cart.set(items);
  }, [items]);

  return {
    ...context,
    items,
    add: handleAdd,
    remove: handleRemove,
    update: handleUpdate
  };
};

export default useCartContext;
