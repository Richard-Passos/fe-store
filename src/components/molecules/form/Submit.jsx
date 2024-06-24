import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const MoleculesFormSubmit = ({ asChild, ...props }, ref) => {
  const Tag = asChild ? Slot : 'button';

  return (
    <Tag
      ref={ref}
      type='submit'
      {...props}
    />
  );
};

export default forwardRef(MoleculesFormSubmit);
