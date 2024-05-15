'use client';

import { Image as RadixImage } from '@radix-ui/react-avatar';
import { forwardRef } from 'react';

import { Image } from '@/components/atoms';
import { cn } from '@/utils';

const AvatarImage = ({ className, ...props }, ref) => {
  return (
    <RadixImage
      asChild
      className={cn('size-full object-cover', className)}
      ref={ref}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image />
    </RadixImage>
  );
};

export default forwardRef(AvatarImage);
