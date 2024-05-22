import { forwardRef } from 'react';

import { Box, Icon, Select } from '@/components/atoms';
import { renderComp } from '@/utils';

import { selectContent } from './variants';

const SelectContent = (
  { scrollActions = {}, position = 'popper', className, children, ...props },
  ref
) => {
  const { up, down } = scrollActions;

  return (
    <Box
      asChild
      className={selectContent({ position, className })}
      position={position}
      ref={ref}
      {...props}
    >
      <Select.Content>
        {renderComp(
          <Select.ScrollAction.Up className='flex h-10 items-center justify-center bg-inherit p-1'>
            <Icon
              className='aspect-square w-auto'
              color={up?.color}
              src={up?.src}
            />
          </Select.ScrollAction.Up>,
          [up]
        )}

        <Select.Viewport>{children}</Select.Viewport>

        {renderComp(
          <Select.ScrollAction.Down className='flex h-10 items-center justify-center bg-inherit p-1'>
            <Icon
              className='aspect-square w-auto'
              color={down?.color}
              src={down?.src}
            />
          </Select.ScrollAction.Down>,
          [down]
        )}
      </Select.Content>
    </Box>
  );
};

export default forwardRef(SelectContent);
