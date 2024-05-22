import { forwardRef } from 'react';

import { Accordion } from '@/components/atoms';
import { cn } from '@/utils';

const MoleculeAccordionTrigger = (
  { className, asChild, children, ...props },
  ref
) => {
  return (
    <Accordion.Header
      className={cn(
        'relative -mb-px h-14 w-full border-b border-transparent before:absolute before:inset-x-[5%] before:-bottom-px before:h-px before:bg-border',
        className
      )}
      ref={ref}
      {...props}
    >
      <Accordion.Trigger
        className='group/accordion-trigger flex size-full items-center justify-between px-md font-medium focus-visible:outline-0'
        data-accordion-trigger
      >
        {children}
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export default forwardRef(MoleculeAccordionTrigger);
