'use client';

import { Title } from '@radix-ui/react-alert-dialog';
import { forwardRef } from 'react';

import { TextSubtitle } from '@/components/atoms/text';
import { cn } from '@/utils';

const AlertDialogTitle = ({ className, ...props }, ref) => (
  <Title
    asChild
    ref={ref}
  >
    <TextSubtitle
      className={cn('text-lg/none font-semibold', className)}
      {...props}
    />
  </Title>
);

export default forwardRef(AlertDialogTitle);
