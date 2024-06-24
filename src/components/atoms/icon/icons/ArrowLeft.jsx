import { forwardRef } from 'react';

import { cn } from '@/utils';

const AtomsIconIconsArrowLeft = ({ className, ...props }, ref) => {
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
        d='M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z'
        fillRule='evenodd'
      />
    </svg>
  );
};

export default forwardRef(AtomsIconIconsArrowLeft);
