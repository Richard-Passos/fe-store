'use client';

import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { useDisclosureContext } from '@/hooks/contexts';

const MoleculesModalTrigger = ({ asChild, ...props }, ref) => {
  const { dataState, toggle } = useDisclosureContext();

  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      data-state={dataState}
      ref={ref}
      {...props}
      onClick={(ev) => {
        toggle();

        props.onClick?.(ev, isOpen);
      }}
    />
  );
};

export default forwardRef(MoleculesModalTrigger);
