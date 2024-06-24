import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MoleculesCarouselPagination = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'ul';

  return (
    <Tag
      className={cn(
        'splide__pagination [&.is-active]:*:*: absolute bottom-sm left-1/2 -translate-x-1/2 gap-1 pl-0 outline-none *:*:size-2 *:*:rounded *:*:border-0 *:*:bg-white *:*:p-0 focus-visible:*:*:outline focus-visible:*:*:outline-black [&.is-active]:*:*:w-4 [&.is-active]:*:*:bg-black',
        className
      )}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculesCarouselPagination);
