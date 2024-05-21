import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import text from './variants';

const Text = ({ asChild, variant = 'p', className, ...props }, ref) => {
  const Tag = asChild ? Slot : variant;

  return (
    <Tag
      className={text({ variant, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Text);
