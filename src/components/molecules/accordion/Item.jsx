import { forwardRef } from 'react';

import { AccordionItem } from '@/components/atoms/accordion';
import { box } from '@/components/atoms/box';
import { cn } from '@/utils';

const MoleculeAccordionItem = (
  { color, variant, className, ...props },
  ref
) => {
  return (
    <AccordionItem
      className={box({
        color,
        variant,
        className: cn(
          'relative top-px -mt-px overflow-hidden p-0 has-[[data-accordion-trigger]:focus-visible]:z-10 has-[[data-accordion-trigger]:focus-visible]:outline [&:not(:first-child)]:rounded-t-none [&:not(:last-child)]:rounded-b-none',
          className
        )
      })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MoleculeAccordionItem);
