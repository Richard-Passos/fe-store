import { forwardRef } from 'react';

import { Heading } from '@/components/atoms';
import { cn } from '@/utils';

const MoleculeAlertTitle = ({ className, ...props }, ref) => {
  return (
    <Heading
      className={cn('text-4xl tracking-tight', className)}
      ref={ref}
      variant='h3'
      {...props}
    />
  );
};

export default forwardRef(MoleculeAlertTitle);
