import { TooltipGroup } from '@mantine/core';
import { forwardRef } from 'react';

const MoleculesTooltipGroup = ({ transitionProps, ...props }, ref) => {
  return (
    <TooltipGroup
      openDelay={500}
      ref={ref}
      transitionProps={{ transition: 'pop', ...transitionProps }}
      {...props}
    />
  );
};

export default forwardRef(MoleculesTooltipGroup);
