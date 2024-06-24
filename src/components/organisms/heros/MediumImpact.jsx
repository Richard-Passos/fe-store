import { forwardRef } from 'react';

import { cn } from '@/utils';

const OrganismsHeroMediumImpact = ({ className, ...props }, ref) => {
  return (
    <section
      className={cn('-mt-[--header-h] min-h-svh py-xl', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(OrganismsHeroMediumImpact);
