import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import control from './variants';

const Control = ({ asChild, className, ...props }, ref) => {
  const Tag = asChild ? Slot : 'input';

  return (
    <Tag
      className={control({ color, variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Control);
