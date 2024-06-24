import { Select } from '@mantine/core';
import { forwardRef } from 'react';

const AtomsSelect = ({ comboboxProps = {}, ...props }, ref) => {
  return (
    <Select
      comboboxProps={{
        radius: 'lg',
        ...comboboxProps
      }}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(AtomsSelect);
