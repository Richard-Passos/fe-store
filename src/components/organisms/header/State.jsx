'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useHeaderContext } from '@/hooks/contexts';

const OrganismsHeaderState = ({ style, ...props }, ref) => {
  const { height, isVisible } = useHeaderContext();

  return (
    <Slot
      ref={ref}
      style={{
        '--header-h': `${height}px`,
        '--is-header-visible': isVisible,
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(OrganismsHeaderState);
