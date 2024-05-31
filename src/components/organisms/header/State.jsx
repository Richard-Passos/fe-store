'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useHeaderContext } from '@/hooks/contexts';

const OrganismsHeaderState = ({ style, ...props }, ref) => {
  const { height } = useHeaderContext();

  return (
    <Slot
      ref={ref}
      style={{ '--header-h': `${height}px`, ...style }}
      {...props}
    />
  );
};

export default forwardRef(OrganismsHeaderState);
