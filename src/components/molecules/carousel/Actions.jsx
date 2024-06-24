import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MoleculesCarouselActions = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={cn(
        'splide__arrows flex flex-wrap items-center justify-center gap-xs',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesCarouselActions);
