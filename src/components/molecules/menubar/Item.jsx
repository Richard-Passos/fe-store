'use client';

import { Item } from '@radix-ui/react-menubar';
import { forwardRef } from 'react';

import { menubarItem } from './variants';

const MenubarItem = ({ color, className, ...props }, ref) => {
  return (
    <Item
      className={menubarItem({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(MenubarItem);
