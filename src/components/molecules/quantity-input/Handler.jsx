import { forwardRef } from 'react';

import { ActionIcon } from '@/components/atoms';
import { cn } from '@/utils';

const MoleculesQuantityInputHandler = ({ className, ...props }, ref) => {
  return (
    <ActionIcon
      className={cn('border-transparent', className)}
      ref={ref}
      variant='default'
      {...props}
    />
  );
};

export default forwardRef(MoleculesQuantityInputHandler);
