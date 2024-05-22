import { forwardRef } from 'react';

import { AccordionContent } from '@/components/atoms/accordion';
import { text } from '@/components/atoms/text';
import { cn } from '@/utils';

const MoleculeAccordionContent = ({ className, children, ...props }, ref) => {
  return (
    <AccordionContent
      className={text({
        variant: 'p',
        className: cn(
          'animate-slide-up overflow-hidden text-sm [--height:--accordion-content-h] data-open:animate-slide-down',
          className
        )
      })}
      ref={ref}
      {...props}
    >
      <div className='p-md'>{children}</div>
    </AccordionContent>
  );
};

export default forwardRef(MoleculeAccordionContent);
