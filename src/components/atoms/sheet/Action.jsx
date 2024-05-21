import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const SheetAction = ({ asChild, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(SheetAction);
