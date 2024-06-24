import { ActionIcon } from '@mantine/core';
import { forwardRef } from 'react';

const AtomsActionIcon = ({ style, ...props }, ref) => {
  return (
    <ActionIcon
      ref={ref}
      style={{ borderWidth: 'var(--border-width)', ...style }}
      {...props}
    />
  );
};

export default forwardRef(AtomsActionIcon);
