import { forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { cn } from '@/utils';

const MoleculeAlertDescription = ({ className, ...props }, ref) => {
  return (
    <Text
      className={cn('text-sm', className)}
      ref={ref}
      variant='p'
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertDescription);
