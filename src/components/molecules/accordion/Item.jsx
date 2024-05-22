import { forwardRef } from 'react';

import { Box } from '@/components/atoms';
import { AccordionItem } from '@/components/atoms/accordion';
import { cn } from '@/utils';

const MoleculeAccordionItem = (
  { className, asChild, children, ...props },
  ref
) => {
  return (
    <Box
      asChild
      className={cn(
        'relative top-px -mt-px overflow-hidden p-0 has-[[data-accordion-trigger]:focus-visible]:z-10 has-[[data-accordion-trigger]:focus-visible]:outline [&:not(:first-child)]:rounded-t-none [&:not(:last-child)]:rounded-b-none',
        className
      )}
      ref={ref}
      {...props}
    >
      <AccordionItem asChild={asChild}>{children}</AccordionItem>
    </Box>
  );
};

export default forwardRef(MoleculeAccordionItem);
