import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import variants from './variants';

const Button = ({ asChild, color, type, size, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      className={variants({ color, type, size, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Button);