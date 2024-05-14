import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import button from './variants';

const Button = (
  { asChild, color, variant, size, className, ...props },
  ref
) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      className={button({ color, variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(Button);
