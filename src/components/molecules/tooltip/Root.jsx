import { Tooltip } from '@mantine/core';
import { forwardRef } from 'react';

const MoleculesTooltip = ({ transitionProps, ...props }, ref) => {
  return (
    <Tooltip
      openDelay={500}
      ref={ref}
      transitionProps={{ transition: 'pop', ...transitionProps }}
      {...props}
    />
  );
};

export default forwardRef(MoleculesTooltip);
