'use client';

import { ItemText } from '@radix-ui/react-select';
import { forwardRef } from 'react';

import { TextRoot } from '@/components/atoms/text';

const SelectItemLabel = ({ asChild, children, ...props }, ref) => {
  return (
    <TextRoot
      asChild
      ref={ref}
      {...props}
    >
      <ItemText asChild={asChild}>{children}</ItemText>
    </TextRoot>
  );
};

export default forwardRef(SelectItemLabel);
