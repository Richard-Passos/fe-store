'use client';

import { forwardRef } from 'react';

import { FormRoot } from '@/components/molecules/form';
import { notifications } from '@/components/molecules/notifications';

const OrganismsFormsPayment = ({ notification, ...props }, ref) => {
  return (
    <FormRoot
      ref={ref}
      {...props}
      onSubmit={(values) => {
        const id = notifications.show({ color: 'green', ...notification });

        props.onSubmit?.(id, values);
      }}
    />
  );
};

export default forwardRef(OrganismsFormsPayment);
