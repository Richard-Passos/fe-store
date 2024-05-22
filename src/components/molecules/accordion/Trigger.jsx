import { forwardRef } from 'react';

import animations from '@/components/animations';
import { Accordion, Button, Icon } from '@/components/atoms';
import { cn, renderComp } from '@/utils';

const MoleculeAccordionTrigger = (
  { className, asChild, children, icon, ...props },
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

        {renderComp(
          <Button
            asChild
            className='aspect-square h-1/2 group-hover/accordion-trigger:bg-active'
            color='inherit'
            variant='ghost'
          >
            <div>
              <Icon
                className={cn(
                  'size-1/2 group-data-open/accordion-trigger:animate-active',
                  animations[icon?.animation]
                )}
                color={icon?.color}
                src={icon?.src}
              />
            </div>
          </Button>,
          [icon]
        )}
      </Accordion.Trigger>
    </Accordion.Header>
  );
};

export default forwardRef(MoleculeAccordionTrigger);
