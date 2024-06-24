import {
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle
} from '@mantine/core';
import { forwardRef } from 'react';

const MoleculesModalContent = (
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
      <ModalOverlay {...overlayProps} />

      <ModalContent
        ref={ref}
        {...props}
      >
        <ModalHeader {...headerProps}>
          <ModalTitle {...titleProps}>{title}</ModalTitle>

          <ModalCloseButton {...closeProps} />
        </ModalHeader>

        <ModalBody {...bodyProps}>{children}</ModalBody>
      </ModalContent>
    </>
  );
};

export default forwardRef(MoleculesModalContent);
