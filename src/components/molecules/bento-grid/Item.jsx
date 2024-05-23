import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import { cn } from '@/utils';

const MoleculeBentoGridItem = (
  { asChild, className, idx, style, ...props },
  ref
) => {
  const Tag = asChild ? Slot : 'li';

  return (
    <Tag
      className={cn('size-full', className)}
      ref={ref}
      style={{
        gridArea: `item-${idx}`,
        ...style
      }}
      {...props}
    />
  );
};

export default forwardRef(MoleculeBentoGridItem);
