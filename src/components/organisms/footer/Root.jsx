import { forwardRef } from 'react';

import { cn } from '@/utils';

const OrganismsFooter = ({ className, ...props }, ref) => {
  return (
    <footer
      className={cn('', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(OrganismsFooter);
