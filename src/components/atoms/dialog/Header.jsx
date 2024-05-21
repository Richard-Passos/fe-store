import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const DialogHeader = ({ asChild, ...props }, ref) => {
  const Tag = asChild ? Slot : 'header';

  return (
    <Tag
      ref={ref}
      {...props}
    />
  );
};
export default forwardRef(DialogHeader);
