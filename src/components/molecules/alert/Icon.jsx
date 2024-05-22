import { forwardRef } from 'react';

import { Icon } from '@/components/atoms';
import { cn } from '@/utils';

const MoleculeAlertIcon = ({ className, src, color, ...props }, ref) => {
  return (
    <div
      className={cn('size-5', className)}
      ref={ref}
      {...props}
    >
      <Icon
        color={color}
        src={src}
      />
    </div>
  );
};

export default forwardRef(MoleculeAlertIcon);
