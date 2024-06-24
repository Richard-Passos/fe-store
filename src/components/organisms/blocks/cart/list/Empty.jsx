import { forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { cart } from '@/utils';

const OrganismsBlocksCartListEmpty = (props, ref) => {
  const itemsLength = cart.count();

  if (itemsLength) return null;

  return (
    <Text
      ref={ref}
      size='xl'
      {...props}
    />
  );
};

export default forwardRef(OrganismsBlocksCartListEmpty);
