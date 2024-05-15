'use client';

import { Title } from '@radix-ui/react-toast';
import { forwardRef } from 'react';

import { TextSubtitle } from '@/components/atoms/text';

const ToastTitle = ({ className, asChild, children, ...props }, ref) => {
  return (
    <TextSubtitle
      asChild
      ref={ref}
      {...props}
    >
      <Title asChild={asChild}>{children}</Title>
    </TextSubtitle>
  );
};

export default forwardRef(ToastTitle);
