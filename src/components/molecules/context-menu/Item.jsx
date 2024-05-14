'use client';

import { Item } from '@radix-ui/react-context-menu';
import { forwardRef } from 'react';

import { contextMenuItem } from './variants';

const ContextMenuItem = ({ color, className, ...props }, ref) => {
  return (
    <Item
      className={contextMenuItem({ color, className })}
      ref={ref}
      {...props}
    />
  );
};

export default forwardRef(ContextMenuItem);
