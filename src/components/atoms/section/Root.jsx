import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

import section from './variants';

const AtomsSection = (
  { asChild, color, variant, size, className, ...props },
  ref
) => {
  const Tag = asChild ? Slot : 'section';

  return (
    <Tag
      className={section({ color, variant, size, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomsSection);
