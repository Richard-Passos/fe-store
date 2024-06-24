'use client';

import { forwardRef } from 'react';

import { TimesIcon } from '@/components/atoms/icon/icons';
import { Action } from '@/components/molecules';
import { useCartContext } from '@/hooks/contexts';

const OrganismsFormsCartRemove = ({ id, children, ...props }, ref) => {
  const { remove } = useCartContext();

  return (
    <Action
      color='red'
      isIconOnly
      ref={ref}
      variant='light'
      {...props}
      onClick={(ev) => {
        remove(id);

        props.onClick?.(id, ev);
      }}
    >
      {children ?? <TimesIcon className='size-2/3' />}
    </Action>
  );
};

export default forwardRef(OrganismsFormsCartRemove);
