import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { cn } from '@/utils';

const MoleculeAlertRoot = ({ className, ...props }, ref) => {
  return (
    <Box
      className={cn('max-w-md flex-row gap-sm', className)}
      ref={ref}
      role='alert'
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertRoot);
