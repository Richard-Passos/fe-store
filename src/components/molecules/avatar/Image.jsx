import { forwardRef } from 'react';

import { Image } from '@/components/atoms';
import { AvatarImage } from '@/components/atoms/avatar';
import { cn } from '@/utils';

const MoleculeAvatarImage = ({ className, ...props }, ref) => {
  return (
    <AvatarImage
      asChild
      className={cn('size-full object-cover', className)}
      ref={ref}
      {...props}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image />
    </AvatarImage>
  );
};

export default forwardRef(MoleculeAvatarImage);
