'use client';

import { useFormatter } from 'next-intl';
import { forwardRef, useState } from 'react';

import { useFormContext } from '@/hooks/contexts';

const OrganismsBlocksCartCheckoutTotal = (
  { subtotal = 0, defaultShipping, shipping = [], ...props },
  ref
) => {
  const getShippingPrice = (id) =>
    shipping.find((data = {}) => data.id === id)?.price ?? 0;

  const { watch } = useFormContext(),
    [shippingPrice, setShippingPrice] = useState(
      getShippingPrice(defaultShipping)
    ),
    format = useFormatter();

  watch('shipping', ({ value }) => setShippingPrice(getShippingPrice(value)));

  const value = subtotal + shippingPrice;

  return (
    <strong
      ref={ref}
      {...props}
    >
      {format.number(value, { style: 'currency', currency: 'USD' })}
    </strong>
  );
};

export default forwardRef(OrganismsBlocksCartCheckoutTotal);
