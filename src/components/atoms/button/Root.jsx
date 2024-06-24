import { Button } from '@mantine/core';
import { forwardRef } from 'react';

const AtomsButton = ({ style, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      style={{ borderWidth: 'var(--border-width)', ...style }}
      {...props}
    />
  );
};

export default forwardRef(AtomsButton);
