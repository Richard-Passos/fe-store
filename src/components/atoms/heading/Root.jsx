import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import heading from './variants';

const Heading = ({ asChild, variant = 'h6', className, ...props }, ref) => {
  const Tag = asChild ? Slot : variant;

  return (
    <Tag
      className={heading({ variant, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Heading);
