import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const MoleculesFormReset = ({ asChild, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      type='reset'
      {...props}
    />
  );
};

export default forwardRef(MoleculesFormReset);
