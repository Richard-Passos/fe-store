'use client';

import { Root } from '@radix-ui/react-tabs';
import { forwardRef } from 'react';

const TabsRoot = (props, ref) => {
  return (
    <Root
      activationMode='manual'
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(TabsRoot);
