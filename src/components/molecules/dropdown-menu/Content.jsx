'use client';

import { Content } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

import { dropdownMenuContent } from './variants';

const DropdownMenuContent = ({ color, className, ...props }, ref) => {
  return (
    <Content
      className={dropdownMenuContent({ color, className })}
      ref={ref}
      sideOffset={8}
      {...props}
    />
  );
};

export default forwardRef(DropdownMenuContent);
