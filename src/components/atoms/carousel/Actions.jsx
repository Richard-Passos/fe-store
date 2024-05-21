import { forwardRef } from 'react';

import { cn } from '@/utils';

const CarouselActions = ({ className, ...props }, ref) => {
  return (
    <section
      className={cn('splide__arrows', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(CarouselActions);
