'use client';

import { forwardRef } from 'react';

import { PaymentFormRoot } from '@/components/organisms/forms/payment';
import { useCartContext } from '@/hooks/contexts';

const OrganismsBlocksCartCheckoutForm = (props, ref) => {
  const { items, remove } = useCartContext();

  return (
    <PaymentFormRoot
      ref={ref}
      {...props}
      onSubmit={(values) => {
        remove(items.map((data = {}) => data.id));

        props.onSubmit?.(items, values);
      }}
    />
  );
};

export default forwardRef(OrganismsBlocksCartCheckoutForm);
