'use client';

import { forwardRef, useState } from 'react';

import { QuantityInput } from '@/components/molecules';
import { useFormContext } from '@/hooks/contexts';

const OrganismsFormsCartQuantityInput = (
  { defaultSize = {}, sizes = [], name, ...props },
  ref
) => {
  const { name: sizeName, id: sizeValue } = defaultSize;

  const { watch } = useFormContext(),
    [size, setSize] = useState(sizeValue);

  watch(sizeName, ({ value }) => setSize(value));

  const max = sizes.find((data) => data.id === size)?.quantity ?? 0;

  return (
    <QuantityInput
      max={max}
      name={name}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(OrganismsFormsCartQuantityInput);
