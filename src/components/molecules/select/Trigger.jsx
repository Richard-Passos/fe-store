import { forwardRef } from 'react';

import animations from '@/components/animations';
import { Control, Icon, Select } from '@/components/atoms';
import { cn, renderComp } from '@/utils';

const SelectTrigger = (
  { className, placeholder, children, icon, ...props },
  ref
) => {
  return (
    <Control
      asChild
      className={cn(
        'group/select-trigger data-open:outline data-open:outline-[--outline-color]',
        className
      )}
      ref={ref}
      {...props}
    >
      <Select.Trigger>
        <Select.Value placeholder={placeholder}>{children}</Select.Value>

        {renderComp(
          <div className='aspect-square h-1/2'>
            <Icon
              className={cn(
                'group-open/select-trigger:animate-active',
                animations[icon?.animation]
              )}
              color={icon?.color}
              src={icon?.src}
            />
          </div>,
          [icon]
        )}
      </Select.Trigger>
    </Control>
  );
};

export default forwardRef(SelectTrigger);
