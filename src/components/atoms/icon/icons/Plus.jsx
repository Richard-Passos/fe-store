import { forwardRef } from 'react';

import { cn } from '@/utils';

const AtomsIconIconsPlus = ({ className, ...props }, ref) => {
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
        d='M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default forwardRef(AtomsIconIconsPlus);
