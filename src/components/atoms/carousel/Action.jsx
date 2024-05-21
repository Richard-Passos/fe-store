import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const CarouselAction = ({ asChild, type, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  const types = {
    next: 'splide__arrow--next',
    prev: 'splide__arrow--prev'
  };

  return (
    <Tag
      className={cn('splide__arrow', types[type ?? 'next'], className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CarouselAction);
