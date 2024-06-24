import { TableThead, TableTr } from '@mantine/core';
import { forwardRef } from 'react';

const MoleculesTableHead = ({ children, rowProps, ...props }, ref) => {
  return (
    <TableThead
      ref={ref}
      {...props}
    >
      <TableTr {...rowProps}>{children}</TableTr>
    </TableThead>
  );
};

export default forwardRef(MoleculesTableHead);
