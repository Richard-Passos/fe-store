'use client';

import { forwardRef } from 'react';

import { FormRoot } from '@/components/molecules/form';
import { notifications } from '@/components/molecules/notifications';
import { useCartContext } from '@/hooks/contexts';
import { normKey } from '@/utils';

const OrganismsFormsCart = ({ type, notification, ...props }, ref) => {
  type = normKey(type);

  const { add, update } = useCartContext();

  const types = {
    create: add,
    update: update
  };

  return (
    <FormRoot
      ref={ref}
      {...props}
      onSubmit={(values = {}) => {
        const { items } = values;

        items.forEach(types[type]);

        const notificationId = notifications.show({
          color: 'green',
          ...notification
        });

        props.onSubmit?.(items, notificationId);
      }}
    />
  );
};

export default forwardRef(OrganismsFormsCart);
