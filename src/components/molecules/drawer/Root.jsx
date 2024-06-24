'use client';

import { DrawerRoot } from '@mantine/core';
import { forwardRef } from 'react';

import { DisclosureProvider } from '@/contexts';
import { useUpdateEffect } from '@/hooks';
import { useDisclosureContext } from '@/hooks/contexts';
import { usePathname } from '@/navigation';

const MoleculesDrawer = forwardRef((props, ref) => {
  const { isOpen, close, dataState } = useDisclosureContext(),
    pathname = usePathname();

  useUpdateEffect(close, [close, pathname]);

  return (
    <DrawerRoot
      data-state={dataState}
      onClose={close}
      opened={isOpen}
      ref={ref}
      {...props}
    />
  );
});
MoleculesDrawer.displayName = 'MoleculesDrawer';

const MoleculesDrawerWithProvider = (
  { defaultValue, trigger, ...props },
  ref
) => {
  return (
    <DisclosureProvider
      defaultValue={defaultValue}
    >
      <MoleculesDrawer
        ref={ref}
        {...props}
      />

      {trigger}
    </DisclosureProvider>
  );
};

export default forwardRef(MoleculesDrawerWithProvider);
