'use client';

import { Scrollbar } from '@radix-ui/react-scroll-area';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const ScrollAreaScrollbar = (
  { className, orientation = 'vertical', ...props },
  ref,
) => {
  const orientationClassName = {
    vertical: 'h-full w-2.5',
    horizontal: 'h-2.5 flex-col',
  };

  return (
    <Scrollbar
      className={cn(
        'flex touch-none select-none bg-muted p-0.5',
        orientationClassName[orientation],
        className,
      )}
      orientation={orientation}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ScrollAreaScrollbar);
