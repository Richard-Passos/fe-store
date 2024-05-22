import { forwardRef } from 'react';

import animations from '@/components/animations';
import { Icon } from '@/components/atoms';
import { button } from '@/components/atoms/button';
import { cn } from '@/utils';

const MoleculeAccordionIcon = (
  { className, src, color, animation, ...props },
  ref
) => {
  return (
    <div
      className={button({
        color: 'inherit',
        variant: 'ghost',
        className: cn(
          'aspect-square h-1/2 group-hover/accordion-trigger:bg-active',
          className
        )
      })}
      ref={ref}
      {...props}
    >
      <Icon
        className={cn(
          'size-2/3 group-data-open/accordion-trigger:animate-active',
          animations[animation]
        )}
        color={color}
        src={src}
      />
    </div>
  );
};

export default forwardRef(MoleculeAccordionIcon);
