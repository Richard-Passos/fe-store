import { forwardRef } from 'react';

import { AccordionRoot } from '@/components/atoms/accordion';
import { cn } from '@/utils';

const MoleculeAccordionRoot = ({ className, ...props }, ref) => {
  return (
    <AccordionRoot
      className={cn('flex w-full flex-col', className)}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAccordionRoot);
