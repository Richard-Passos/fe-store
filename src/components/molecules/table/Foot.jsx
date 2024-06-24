import { TableTfoot, TableTr } from '@mantine/core';
import { forwardRef } from 'react';

const MoleculesTableFoot = ({ children, rowProps, ...props }, ref) => {
  return (
    <TableTfoot
      ref={ref}
      {...props}
    >
      <TableTr {...rowProps}>{children}</TableTr>
    </TableTfoot>
  );
};

export default forwardRef(MoleculesTableFoot);
