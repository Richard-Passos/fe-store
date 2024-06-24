import { forwardRef } from 'react';

import { cn } from '@/utils';

const AtomsIconIconsMinus = ({ className, ...props }, ref) => {
  return (
    <svg
      className={cn('size-8 fill-current', className)}
      ref={ref}
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default forwardRef(AtomsIconIconsMinus);
