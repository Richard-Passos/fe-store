import { Tooltip } from '@mantine/core';
import { Slot } from '@radix-ui/react-slot';
import { forwardRef } from 'react';

const MoleculesTooltip = ({ asChild, transitionProps, ...props }, ref) => {
  return (
    <Tooltip
      component={asChild && Slot}
      openDelay={500}
      ref={ref}
      transitionProps={{ transition: 'pop', ...transitionProps }}
      {...props}
    />
  );
};

export default forwardRef(MoleculesTooltip);
