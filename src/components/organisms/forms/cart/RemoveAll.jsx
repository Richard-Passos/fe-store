'use client';

import { forwardRef } from 'react';

import { Action } from '@/components/molecules';
import { useCartContext, useFormContext } from '@/hooks/contexts';

const OrganismsFormsCartRemoveAll = ({ id, ...props }, ref) => {
  const { remove } = useCartContext(),
    { getValues } = useFormContext();

  const { items } = getValues();

  return (
    <Action
      color='red'
      ref={ref}
      variant='light'
      {...props}
      onClick={(ev) => {
        remove(items.map((data = {}) => data.id));

        props.onClick?.(items, ev);
      }}
    />
  );
};

export default forwardRef(OrganismsFormsCartRemoveAll);
