import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import overlay from './variants';

const AtomOverlay = ({ asChild, color, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'div';

  return (
    <Tag
      className={overlay({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomOverlay);
