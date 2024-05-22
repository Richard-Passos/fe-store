import { forwardRef } from 'react';

import animations from '@/components/animations';
import { Button, Icon } from '@/components/atoms';
import { SelectItem as AtomSelectItem } from '@/components/atoms/select';
import { cn, renderComp } from '@/utils';

import { selectItem } from './variants';

const SelectItem = (
  { variant = 'ghost', className, indicator, children, ...props },
  ref
) => {
  return (
    <Button
      asChild
      className={selectItem({ variant, className })}
      color='inherit'
      ref={ref}
      size='xs'
      variant={variant}
      {...props}
    >
      <AtomSelectItem.Root>
        {renderComp(
          <div
            className={cn(
              'group-checked/select-item:animate-active',
              animations[indicator?.animation]
            )}
          >
            <AtomSelectItem.Indicator>
              <Icon
                color={indicator?.color}
                src={indicator?.src}
              />
            </AtomSelectItem.Indicator>
          </div>,
          [indicator]
        )}

        <AtomSelectItem.Label>{children}</AtomSelectItem.Label>
      </AtomSelectItem.Root>
    </Button>
  );
};

export default forwardRef(SelectItem);
