import { forwardRef } from 'react';

import { Text } from '@/components/atoms';
import { AccordionContent } from '@/components/atoms/accordion';
import { cn } from '@/utils';

const MoleculeAccordionContent = ({ className, children, ...props }, ref) => {
  return (
    <Text
      asChild
      className={cn(
        'animate-slide-up overflow-hidden text-sm [--height:--accordion-content-h] data-open:animate-slide-down',
        className
      )}
      ref={ref}
      variant='p'
      {...props}
    >
      <AccordionContent>
        <div className='p-md'>{children}</div>
      </AccordionContent>
    </Text>
  );
};

export default forwardRef(MoleculeAccordionContent);
