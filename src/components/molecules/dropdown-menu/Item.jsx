'use client';

import { Item } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { dropdownMenuItem } from './variants';

const DropdownMenuItem = ({ color, className, ...props }, ref) => {
  return (
    <Item
      className={dropdownMenuItem({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuItem);
