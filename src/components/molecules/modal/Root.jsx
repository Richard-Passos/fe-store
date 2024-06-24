'use client';

import { ModalRoot } from '@mantine/core';
import { forwardRef } from 'react';

import { DisclosureProvider } from '@/contexts';
import { useDisclosureContext } from '@/hooks/contexts';
import { cn } from '@/utils';

const MoleculesModal = forwardRef(({ className, ...props }, ref) => {
  const { isOpen, close, dataState } = useDisclosureContext();

  return (
    <ModalRoot
      className={cn('*:left-0', className)}
      data-state={dataState}
      onClose={close}
      opened={isOpen}
      ref={ref}
      {...props}
    />
  );
});
MoleculesModal.displayName = 'MoleculesModal';

const MoleculesModalWithProvider = (
  { defaultValue, trigger, ...props },
  ref
) => {
  return (
    <DisclosureProvider defaultValue={defaultValue}>
      <MoleculesModal
        ref={ref}
        {...props}
      />

      {trigger}
    </DisclosureProvider>
  );
};

export default forwardRef(MoleculesModalWithProvider);
