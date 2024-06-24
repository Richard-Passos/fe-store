import {
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle
} from '@mantine/core';
import { forwardRef } from 'react';

const MoleculesDrawerContent = (
  {
    title,
    children,
    overlayProps,
    headerProps,
    titleProps,
    closeProps,
    bodyProps,
    ...props
  },
  ref
) => {
  return (
    <>
      <DrawerOverlay {...overlayProps} />

      <DrawerContent
        ref={ref}
        {...props}
      >
        <DrawerHeader {...headerProps}>
          <DrawerTitle {...titleProps}>{title}</DrawerTitle>

          <DrawerCloseButton {...closeProps} />
        </DrawerHeader>

        <DrawerBody {...bodyProps}>{children}</DrawerBody>
      </DrawerContent>
    </>
  );
};

export default forwardRef(MoleculesDrawerContent);
