import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import item from './variants';

const AtomItem = ({ asChild, color, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'li';

  return (
    <Tag
      className={item({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomItem);
